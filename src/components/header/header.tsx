import { createStyles, Theme } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import GitHubSocialIcon from "./github-social-icon";
import LinkedInSocialIcon from "./linked-in-social-icon";
import TwitterSocialIcon from "./twitter-social-icon";
import DarkModeSwitch from "./dark-mode-switch";
import Logo from "./logo";
import { HeaderQuery } from "../../../types/graphql-types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profilePicture: {
      width: "80%",
      height: "80%",
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

  const data: HeaderQuery = useStaticQuery<HeaderQuery>(graphql`
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={10}>
          <Grid container justify="center" alignItems="center">
            <Logo />
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Avatar
              component={Image}
              alt="Morrison Cole"
              fluid={data.avatar.childImageSharp.fluid}
              className={classes.profilePicture}
            />
            <DarkModeSwitch />
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
        <TwitterSocialIcon />
      </Grid>
    </header>
  );
}
