import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            "robots": [],
            "searchField": ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => this.setState({"robots": users}));
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({
            "searchField": event.target.value,
        });
    }

    render() {
        console.log(this.state);
        const filteredRobots = this.state.robots && Array.isArray(this.state.robots) && this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        console.log(filteredRobots);

        if(!this.state.robots || !Array.isArray(this.state.robots) || this.state.robots.length === 0){
            return (
                <div className="tc">
                    <h1 className="f1">Loading...</h1>
                </div>
            );
        }
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} searchField={this.state.searchField} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;