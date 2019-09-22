import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { Container, createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
  },
  spacing: 4,
  palette: {
    primary: {
      main: "#007bff",
    },
  },
})

interface LayoutProps {
  location: Location,
  title: string,
  children: React.ReactNode
}

class Layout extends React.Component<LayoutProps, {}> {

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <Container className="mainContent" maxWidth="md">
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            &copy; Morrison Cole {new Date().getFullYear()}
          </footer>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Layout
