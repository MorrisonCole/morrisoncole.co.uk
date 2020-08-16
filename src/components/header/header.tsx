import { createStyles, Theme } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import GitHubSocialIcon from "./github_social_icon";
import LinkedInSocialIcon from "./linked_in_social_icon";
import StackOverflowSocialIcon from "./stack_overflow_social_icon";
import TwitterSocialIcon from "./twitter_social_icon";
import DarkModeSwitch from "./DarkModeSwitch";
import ClientOnly from "../client_only";
import Logo from "./logo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profilePicture: {
      width: "65%",
      height: "65%",
      marginBottom: 0,
    },
    grid: {
      marginTop: "2%",
    },
    socialContainer: {
      marginBottom: theme.spacing(1),
    },
  })
);

export default function Header(): JSX.Element {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query Header {
      avatar: file(absolutePath: { regex: "/morrison-cole-profile.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header>
      <Grid container direction="column">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item xs>
            <Grid container justify="center" alignItems="center">
              <Logo />
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid container justify="center" alignItems="center">
              <Avatar
                component={Image}
                alt="Morrison Cole"
                fluid={data.avatar.childImageSharp.fluid}
                className={classes.profilePicture}
              />
              <ClientOnly>
                <DarkModeSwitch />
              </ClientOnly>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.socialContainer}
        >
          <GitHubSocialIcon />
          <LinkedInSocialIcon />
          <StackOverflowSocialIcon />
          <TwitterSocialIcon />
        </Grid>
      </Grid>
    </header>
  );
}
