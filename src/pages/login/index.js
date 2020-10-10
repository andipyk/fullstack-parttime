import React, { Component } from 'react';
import { RowInput } from "../../components"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    setValue = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doLogin = () => {
        const { username, password } = this.state

        console.info(username, password);
        if (username === "admin" && password === "admin") {
            console.log("harusnya login");
            this.props.goToHome()
        }
    }

    render() {
        return (
            <>
                <RowInput
                    labelInput="Username"
                    name="username"
                    changeValueInput={this.setValue}
                />
                <RowInput
                    labelInput="Password"
                    name="password"
                    type="password"
                    changeValueInput={this.setValue}
                />
                <RowInput type="button" value="Login" clickFn={this.doLogin} />
            </>
        );
    }
}

export default Login;