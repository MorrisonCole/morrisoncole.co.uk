import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import NavBar from "./navbar/navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteGrid: {
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "3fr 1fr min(85ch, 100%) 1fr 3fr",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `
    '. header header header .'
    '. content content content .'
    'footer footer footer footer footer'
    `,
    },
    header: {
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    content: {
      gridArea: "content",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
  })
);

interface LayoutProps {
  location: Location;
  children: React.ReactNode;
}

export default function Layout({
  location,
  children,
}: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.siteGrid}>
      <Header />

      <main className={classes.content}>
        <NavBar location={location} />
        {children}
      </main>

      <Footer />
    </div>
  );
}
