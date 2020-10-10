import React, { Component } from 'react';
import { Header, Nav, Body, Footer } from "./templates"
import { Home, Login, Contact, Register } from "./pages"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      page: "REGISTER",
      contacts: [{
        name: "Admin",
        phone: "0123456789"
      }, {
        name: "User",
        phone: "1234567890"
      }]

    }
  }

  deleteRow = (idx) => {
    const lastData = this.state.contacts
    lastData.splice(idx, 1)
    this.setState({
      contacts: lastData
    })
  }

  updateContacts = data => {
    let newData = this.state.contacts
    newData.push(data)
    this.setState({
      contacts: newData
    })
  }

  goToPage = page => {
    this.setState({
      page
    })
  }

  showPage = () => {
    if (this.state.page === "LOGIN")
      return <Login goToHome={() => this.goToPage("HOME")} />

    if (this.state.page === "CONTACT")
      return <Contact contacts={this.state.contacts} deleteRow={this.deleteRow} />

    if (this.state.page === "REGISTER")
      return <Register updateContacts={this.updateContacts} />

    return <Home />
  }

  render() {
    return (
      <>
        <Header />
        <Nav goToPage={this.goToPage} />
        <Body>
          {
            this.showPage()
          }
        </Body>
        <Footer />
      </>
    );
  }
}

export default App;