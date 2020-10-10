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
                <Menu onClick={() => this.props.goToPage("HOME")} >Home</Menu>
                <Menu onClick={() => this.props.goToPage("CONTACT")} >Contact Us</Menu>
                <Menu onClick={() => this.props.goToPage("LOGIN")} >Login</Menu>
                <Menu onClick={() => this.props.goToPage("REGISTER")} >Register</Menu>
            </div>
        );
    }
}

export default Nav;