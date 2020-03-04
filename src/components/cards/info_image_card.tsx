import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

interface InfoImageCardProps {
  title: string;
  subtitle1: string;
  text: string;
  actionTitle: string;
  actionHref: string;
  image: string;
}

const styles = makeStyles({
  card: {
    maxWidth: 400
  },
  image: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})

export default function InfoImageCard (props: InfoImageCardProps) {
  const classes = styles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={props.image} />
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <Typography gutterBottom color="textSecondary">
            {props.subtitle1}
            <br />
          </Typography>
          <Typography variant="body2">{props.text}</Typography>
        </CardContent>
      </CardActionArea>
      {props.actionTitle ? (
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={props.actionHref}
            target="_blank"
          >
            {props.actionTitle}
          </Button>
        </CardActions>
      ) : (
        ''
      )}
    </Card>
  )
}
