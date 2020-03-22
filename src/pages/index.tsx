import {
  Button, createStyles, Grid, makeStyles, Paper, Theme, Typography
} from '@material-ui/core'
import { GetApp, Star } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SEO from '../components/seo'
import CustomVerticalTimelineElement from '../components/timeline/custom_vertical_timeline_element'
import TimelineImageCardRaw from '../components/timeline/timeline_image_card'
import cvPdf from '../downloads/cv.pdf'
import { life } from '../components/timeline/timeline-data'
import './index.css'
import { TimelineIndexQuery } from '../../types/graphql-types'

const styles = makeStyles((theme: Theme) => createStyles({
  introContainer: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    marginTop: theme.spacing(3)
  },
  introTextPaper: {
    padding: theme.spacing(2.5)
  },
  introTextBody: {
    marginTop: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(1)
  }
}))

interface TimelineIndexProps {
  data: TimelineIndexQuery;
}

export default function TimelineIndex (props: TimelineIndexProps): JSX.Element {
  const classes = styles()

  const imageFiles = props.data.allFile.edges.map(edge => edge.node)
  const listItems = life(new Map(imageFiles.map(i => [i.name, i.childImageSharp]))).map((item) => (
    <CustomVerticalTimelineElement
      className="vertical-timeline-element--work"
      date={item.date}
      iconStyle={item.icon.background}
      icon={item.icon.icon}
      key={item.title + item.subtitle1}
    >
      <TimelineImageCardRaw
        title={item.title}
        image={item.image}
        subtitle1={item.subtitle1}
        text={item.text}
        mainLink={item.mainLink}
      />
    </CustomVerticalTimelineElement>
  ))

  return (
    <div>
      <SEO title="Timeline" />
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.introContainer}>
          <Paper className={classes.introTextPaper}>
            <Typography variant="h5" align="center">
              Hello!
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className={classes.introTextBody}
            >
              I&apos;m Morrison - a Software Engineer, Product Manager, and
              (occasional) Musician.
            </Typography>
            <Grid container direction="column" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                href={cvPdf}
                download="cv-morrison-cole.pdf"
              >
                CV (.pdf)
                <GetApp className={classes.rightIcon} />
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <VerticalTimeline>
        {listItems}

        <CustomVerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  )
}

export const pageQuery = graphql`
  query TimelineIndex {
    allFile(filter: {absolutePath: {regex: "/timeline/.*/"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
