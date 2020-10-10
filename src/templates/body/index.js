import React, { Component } from 'react';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default Body;