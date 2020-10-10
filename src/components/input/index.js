import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { type, value, name, onChangeValue, onClickBtn } = this.props
        return (
            <input
                type={type ? type : "text"}
                name={name}
                value={value}
                onChange={onChangeValue}
                onClick={onClickBtn}
            />
        );
    }
}

export default Input;