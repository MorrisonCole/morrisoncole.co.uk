import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "gatsby";
import React from "react";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(3),
      display: "grid",
      justifyContent: "center",
    },
    introContainer: {
      width: "40%",
      marginTop: theme.spacing(3),
    },
    introTextPaper: {
      padding: theme.spacing(2.5),
    },
    introTextBody: {
      marginTop: theme.spacing(1),
    },
  })
);

interface NavBarProps {
  location: Location;
}

export default function NavBar({ location }: NavBarProps): JSX.Element {
  const classes = styles();

  const [, setValue] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Tabs
        value={location.pathname.split("/")[1]}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Timeline" value="" component={Link} to="/" />
        <Tab label="Blog" value="blog" component={Link} to="/blog/" />
      </Tabs>
    </div>
  );
}
