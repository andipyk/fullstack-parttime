import React, { Component } from 'react';
import { Header, Nav, Body, Footer } from "./templates"
import { Home, Login } from "./pages"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      page: "LOGIN",
    }
  }

  doLogin = () => {
    this.setState({
      page: "HOME"
    })
  }

  showPage = () => {
    if (this.state.page === "LOGIN")
      return <Login goToHome={this.doLogin} />

    return <Home />
  }

  render() {
    return (
      <>
        <Header />
        <Nav />
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