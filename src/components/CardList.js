import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} name={user.name} id={user.id} email={user.email} />
    });

    // Below condition was added to test React ErrorBoundary
    // if(true) {
    //     throw new Error("Newwwww");
    // }

    return (
        <div>
          {cardComponent}
        </div>
    );
}

export default CardList;