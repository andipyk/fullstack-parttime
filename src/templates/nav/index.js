import React, { Component } from 'react';
import { Menu } from "../../components"


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px"
            }}>
                <Menu>Home</Menu>
                <Menu>Contact Us</Menu>
                <Menu>Login</Menu>
            </div>
        );
    }
}

export default Nav;