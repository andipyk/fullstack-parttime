import React, { Component } from 'react';
import Input from "../input"
import "./style.css"


class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { labelInput, type, value, name, changeValueInput, clickFn } = this.props
        return (
            <div className="row-input">
                { labelInput &&
                    <div>
                        <label>{labelInput}</label>
                    </div>
                }
                <div>
                    <Input name={name} type={type} value={value} onClickBtn={clickFn} onChangeValue={changeValueInput} />
                </div>
            </div>
        );
    }
}

export default RowInput;