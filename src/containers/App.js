import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = state => {
    return {
        "searchField": state.searchRobots.searchField,
        "robots": state.requestRobots.robots,
        "isPending": state.requestRobots.isPending,
        "error": state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onReqestRobots: () => requestRobots(dispatch)
    };
}

const App = ({searchField, robots, isPending, error, onSearchChange, onReqestRobots}) => {

    // const [robots, setRobots] = useState([]);

    useEffect(() => {
        onReqestRobots();
    }, []);

    const filteredRobots = robots && Array.isArray(robots) && robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log(filteredRobots);

    if(isPending || !robots || !Array.isArray(robots) || robots.length === 0){
        return (
            <div className="tc">
                <h1 className="f1">Loading...</h1>
            </div>
        );
    }
    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} searchField={searchField} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);