import React, { Component } from 'react';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                {this.props.children}
            </div>
        );
    }
}

export default Body;