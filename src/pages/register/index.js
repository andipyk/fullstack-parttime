import React, { Component } from 'react';
import { RowInput } from '../../components';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }

    setValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doRegister = () => {
        const { name, phone } = this.state
        this.props.updateContacts({ name, phone })
    }

    render() {
        return (
            <div>
                <RowInput
                    labelInput="Name"
                    name="name"
                    changeValueInput={this.setValue}
                />
                <RowInput
                    labelInput="Phone"
                    name="phone"
                    changeValueInput={this.setValue}
                />
                <RowInput type="button" value="Register" clickFn={this.doRegister} />
            </div>
        );
    }
}

export default Register;