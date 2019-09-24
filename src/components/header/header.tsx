import React from "react"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import makeStyles from "@material-ui/core/styles/makeStyles"
import GitHubSocialIcon from "./github_social_icon"
import LinkedInSocialIcon from "./linked_in_social_icon"
import TwitterSocialIcon from "./twitter_social_icon"
import StackOverflowSocialIcon from "./stack_overflow_social_icon"
import { createStyles, Theme } from "@material-ui/core"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profilePicture: {
      width: "65%",
      height: "65%",
      marginBottom: 0,
    },
    logo: {
      margin: "0 30px 10px 0",
      width: "80%",
      height: "80%",
    },
    grid: {
      marginTop: "2%",
    },
    socialContainer: {
      marginBottom: theme.spacing(1),
    },
  }),
)

export default function Header() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query Header {
      logo: file(absolutePath: { regex: "/morrison-cole-logo.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar: file(absolutePath: { regex: "/morrison-cole-profile.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <Grid container
            direction="column">
        <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.grid}>

          <Grid item xs>
            <Grid container justify="center" alignItems="center">
              <Image
                fluid={data.logo.childImageSharp.fluid}
                alt={"Morrison Cole logo"}
                className={classes.logo}
              />
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Morrison Cole" src={data.avatar.childImageSharp.fluid.src}
                      className={classes.profilePicture}/>
            </Grid>
          </Grid>

        </Grid>

        <Grid container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.socialContainer}>
          <GitHubSocialIcon/>
          <LinkedInSocialIcon/>
          <StackOverflowSocialIcon/>
          <TwitterSocialIcon/>
        </Grid>
      </Grid>
    </header>
  )
}
