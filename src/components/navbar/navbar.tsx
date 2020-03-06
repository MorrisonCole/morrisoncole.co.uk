import { createStyles, Theme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { Link } from 'gatsby'
import React from 'react'

const styles = makeStyles((theme: Theme) => createStyles({
  grow: {
    flexGrow: 1
  },
  introContainer: {
    width: '40%',
    marginTop: theme.spacing(3)
  },
  introTextPaper: {
    padding: theme.spacing(2.5)
  },
  introTextBody: {
    marginTop: theme.spacing(1)
  }
}))

interface NavBarProps {
  location: Location;
}

export default function NavBar (props: NavBarProps): JSX.Element {
  const classes = styles()

  const [, setValue] = React.useState(0)

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Tabs
          value={props.location.pathname.split('/')[1]}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          className={classes.grow}
        >
          <Tab label="Timeline" value="" component={Link} to="" />
          <Tab
            label="Software"
            value="software"
            component={Link}
            to="/software"
          />
          <Tab label="Music" value="music" component={Link} to="/music" />
          <Tab label="Blog" value="blog" component={Link} to="/blog" />
        </Tabs>
      </Grid>
    </Grid>
  )
}
