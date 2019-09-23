import React from "react"
import { Container } from "@material-ui/core"
import Header from "./header/header"
import NavBar from "./navbar/navbar"
import Footer from "./footer/footer"

interface LayoutProps {
  location: Location,
  children: React.ReactNode
}

class Layout extends React.Component<LayoutProps, {}> {

  render() {
    const { location, children } = this.props

    return (
      <React.Fragment>
        <Container className="mainContent" maxWidth="md">
          <Header/>

          <NavBar/>

          <main>{children}</main>
        </Container>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Layout
