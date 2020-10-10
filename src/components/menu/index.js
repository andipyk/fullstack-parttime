import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{
                marginLeft: "10px",
                padding: "5px 10px",
                border: "1px solid gray"
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Menu;