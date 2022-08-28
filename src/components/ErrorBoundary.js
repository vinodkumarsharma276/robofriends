import React, { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError) {
            return (
                <div className="tc">
                    <h1 className="f2">Ooops!!! Holy Shit!!! That's not right.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;