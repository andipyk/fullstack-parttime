import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th width="20px">No</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>
                                            <button onClick={() => this.props.deleteRow(idx)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Contact;