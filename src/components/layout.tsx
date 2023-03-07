import { Box } from "@mui/material";
import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import NavBar from "./navbar/navbar";

interface LayoutProps {
  location: Location;
  children: React.ReactNode;
}

export default function Layout({
  location,
  children,
}: LayoutProps): JSX.Element {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "3fr 1fr min(85ch, 100%) 1fr 3fr",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: `
          '. header header header .'
          '. content content content .'
          'footer footer footer footer footer'
        `,
      }}
    >
      <Header />

      <Box
        sx={(theme) => ({
          gridArea: "content",
          [theme.breakpoints.down("lg")]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
          },
        })}
      >
        <main>
          <NavBar location={location} />
          {children}
        </main>
      </Box>

      <Footer />
    </Box>
  );
}
