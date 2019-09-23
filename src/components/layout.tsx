import React from "react"
import { Container } from "@material-ui/core"
import Header from "./header/header"

interface LayoutProps {
  location: Location,
  children: React.ReactNode
}

class Layout extends React.Component<LayoutProps, {}> {

  render() {
    const { location, children } = this.props

    return (
      <Container className="mainContent" maxWidth="md">
        <Header/>
        <main>{children}</main>
        <footer>
          &copy; Morrison Cole {new Date().getFullYear()}
        </footer>
      </Container>
    )
  }
}

export default Layout
