import { Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import GitHubSocialIcon from "./github-social-icon";
import LinkedInSocialIcon from "./linked-in-social-icon";
import TwitterSocialIcon from "./twitter-social-icon";
import DarkModeSwitch from "./dark-mode-switch";
import Logo from "./logo";

export default function Header(): JSX.Element {
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
        },
        gridArea: "header",
        marginTop: theme.spacing(2),
      })}
    >
      <header>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows:
              "minmax(min-content, 70%) minmax(min-content, max-content)",
            gridTemplateColumns: "75% 25%",
          }}
        >
          <Box
            sx={{
              alignSelf: "center",
              justifySelf: "stretch",
              gridRow: "1 / span 2",
              gridColumn: "1 / span 1",
            }}
          >
            <Logo />
          </Box>

          <Box
            sx={{
              alignSelf: "center",
              gridRow: "1 / span 1",
              gridColumn: "2 / span 1",
              paddingLeft: ({ spacing }) => spacing(2),
              paddingRight: ({ spacing }) => spacing(2),
            }}
          >
            <StaticImage
              src={"../../../static/morrison-cole.jpg"}
              alt="Morrison Cole"
              loading="eager"
              style={{
                borderRadius: "50%",
              }}
              layout="constrained"
              aspectRatio={1}
            />
          </Box>

          <Box
            sx={{
              justifySelf: "center",
              gridRow: "2 / span 1",
              gridColumn: "2 / span 1",
            }}
          >
            <DarkModeSwitch />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(3, min-content)",
            marginBottom: ({ spacing }) => spacing(1),
          }}
        >
          <GitHubSocialIcon />
          <LinkedInSocialIcon />
          <TwitterSocialIcon />
        </Box>
      </header>
    </Box>
  );
}
