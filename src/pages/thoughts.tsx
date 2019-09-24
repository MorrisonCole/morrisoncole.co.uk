import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Star from "@material-ui/icons/Star"
import Typography from "@material-ui/core/Typography"
import { createStyles, Theme } from "@material-ui/core"
import { books } from "../migrate/thoughts_data"
import SEO from "../components/seo"

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    body: {
      marginTop: theme.spacing(2),
    },
  }),
)

interface ThoughtsProps {
  location: Location
  data: any
}

export default function Thoughts(props: ThoughtsProps) {
  const classes = styles()

  const listItems = books.map((item) =>
    <ListItem button component="a" href={item.link} target={"_blank"}>
      <ListItemIcon>
        <Star/>
      </ListItemIcon>
      <ListItemText
        primary={item.title}
        secondary={item.author}
      />
    </ListItem>,
  )

  return (
    <Grid container className={classes.container} direction={"column"}>
      <SEO title="Blog"/>
      <Typography variant={"h5"}>Books of 2019</Typography>
      <Typography variant={"subtitle1"}>(Roughly ordered by how highly I recommend them ♥)</Typography>
      <List dense>
        {listItems}
      </List>
    </Grid>
  )
}
