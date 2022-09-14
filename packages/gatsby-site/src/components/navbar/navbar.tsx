import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "gatsby";
import React from "react";

interface NavBarProps {
  location: Location;
}

export default function NavBar({ location }: NavBarProps): JSX.Element {
  return (
    <Box
      sx={{
        marginBottom: (theme) => theme.spacing(3),
        display: "grid",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={location.pathname.split("/")[1]}
        onChange={() => {}}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Timeline" value="" component={Link} to="/" />
        <Tab label="Blog" value="blog" component={Link} to="/blog/" />
      </Tabs>
    </Box>
  );
}
