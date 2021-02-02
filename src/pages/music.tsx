import { createStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import { graphql, PageProps } from "gatsby";
import React from "react";
import InfoImageCard from "../components/cards/info-image-card";
import SEO from "../components/seo";
import { MusicQuery } from "../../types/graphql-types";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    heading: {
      fontSize: 20,
      fontWeight: "normal",
    },
  })
);

interface MusicProps {
  data: MusicQuery;
}

export default function Music({
  data,
  location,
}: MusicProps & PageProps): JSX.Element {
  const classes = styles();

  return (
    <div className={classes.container}>
      <SEO title="Music" location={location} />
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <InfoImageCard
            title="Latent Signal"
            image={data.latentSignal.childImageSharp.gatsbyImageData}
            subtitle1="Founded in 2010."
            text={
              "My band. We create original music, covers, and (sometimes) the odd vlog."
            }
            actionTitle="Watch on YouTube"
            actionHref="https://www.youtube.com/channel/UCqQdwJ5W-FDAin_Hc6oHz_A"
          />
        </Grid>
      </Grid>

      <Grid container justify="flex-start" spacing={4}>
        <Grid item xs={6}>
          <InfoImageCard
            title="Parapraxis: Suite I (Clio)"
            image={data.clioCover.childImageSharp.gatsbyImageData}
            subtitle1="Game OST"
            text="An original EP for the game Parapraxis: Foundations. Orchestral / Orchestral Rock, recorded with a mixture of VSTs and live instruments."
            actionTitle="Listen On Bandcamp"
            actionHref="https://morrisoncole.bandcamp.com/"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export const pageQuery = graphql`
  query Music {
    latentSignal: file(absolutePath: { regex: "/music/latent-signal.png/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    clioCover: file(absolutePath: { regex: "/music/clio-cover.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
