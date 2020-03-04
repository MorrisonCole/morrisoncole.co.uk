import {
  Container, createStyles, WithStyles, withStyles
} from '@material-ui/core'
import React from 'react'
import Footer from './footer/footer'
import Header from './header/header'
import './layout.css'
import NavBar from './navbar/navbar'

const styles = createStyles({
  site: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  siteContent: {
    flexGrow: 1
  }
})

interface LayoutProps extends WithStyles<typeof styles> {
  location: Location
  children: React.ReactNode
}

class Layout extends React.Component<LayoutProps, {}> {
  public render () {
    const { classes, location, children } = this.props

    return (
      <div className={classes.site}>
        <Container className={classes.siteContent} maxWidth="md">
          <Header />

          <main>
            <NavBar location={location} />

            {children}
          </main>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
