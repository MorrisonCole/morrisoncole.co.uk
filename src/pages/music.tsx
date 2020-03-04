import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { graphql } from 'gatsby'
import React from 'react'
import InfoImageCard from '../components/cards/info_image_card'
import SEO from '../components/seo'

const styles = makeStyles((theme: Theme) => createStyles({
  container: {
    marginTop: theme.spacing(4)
  },
  heading: {
    fontSize: 20,
    fontWeight: 'normal'
  }
}))

interface MusicProps {
  location: Location
  data: any
}

export default function Music (props: MusicProps) {
  const classes = styles()

  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.container}>
      <SEO title="Music" />
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Collaborations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <section id="Latent%20Signal">
            <InfoImageCard
              title="Latent Signal"
              image={props.data.latentSignal.childImageSharp.fluid.src}
              subtitle1="British band creating original music, covers, and (sometimes) the odd vlog."
              text={
                "We've been writing music for over 10 years, and recently began releasing our creations as fully-fledged music videos."
              }
              actionTitle="Watch on YouTube"
              actionHref="https://www.youtube.com/channel/UCqQdwJ5W-FDAin_Hc6oHz_A"
            />
          </section>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Solo</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <section id="Parapraxis:%20Suite%20I%20(Clio)">
            <InfoImageCard
              title="Parapraxis: Suite I (Clio)"
              image={props.data.clioCover.childImageSharp.fluid.src}
              subtitle1="Game OST"
              text="An original EP for the game Parapraxis: Foundations. Orchestral / Orchestral Rock, recorded with a mixture of VSTs and live instruments."
              actionTitle="Listen On Bandcamp"
              actionHref="https://morrisoncole.bandcamp.com/"
            />
          </section>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export const pageQuery = graphql`
  query Music {
    latentSignal: file(absolutePath: { regex: "/music/latent-signal.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clioCover: file(absolutePath: { regex: "/music/clio-cover.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
            }
        }
      }
    }
  }
`
