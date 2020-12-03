import { createStyles, Theme } from "@material-ui/core";
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
    container: {
      marginTop: theme.spacing(2),
      display: "grid",
      gridTemplateRows:
        "minmax(min-content, 70%) minmax(min-content, max-content)",
      gridTemplateColumns: "75% 25%",
    },
    logo: {
      alignSelf: "center",
      justifySelf: "stretch",
      gridRow: "1 / span 2",
      gridColumn: "1 / span 1",
    },
    avatar: {
      alignSelf: "center",
      gridRow: "1 / span 1",
      gridColumn: "2 / span 1",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    switch: {
      justifySelf: "center",
      gridRow: "2 / span 1",
      gridColumn: "2 / span 1",
    },
    profilePicture: {
      borderRadius: "50%",
      height: "100%",
      width: "auto",
    },
    socialIconGrid: {
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "repeat(3, min-content)",
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
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo />
        </div>

        <div className={classes.avatar}>
          <Image
            alt="Morrison Cole"
            fluid={data.avatar.childImageSharp.fluid}
            className={classes.profilePicture}
          />
        </div>

        <div className={classes.switch}>
          <DarkModeSwitch />
        </div>
      </div>

      <div className={classes.socialIconGrid}>
        <GitHubSocialIcon />
        <LinkedInSocialIcon />
        <TwitterSocialIcon />
      </div>
    </header>
  );
}
