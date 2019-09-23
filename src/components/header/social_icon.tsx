import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {createStyles, Theme} from "@material-ui/core";

interface SocialIconProps {
    ariaLabel: string;
    href: string;
    icon: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconButton: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    })
);

export default function SocialIcon(props: SocialIconProps) {
    const classes = useStyles();

    return (
        <IconButton aria-label={props.ariaLabel}
                    href={props.href} target="_blank"
                    className={classes.iconButton}>
            {props.icon}
        </IconButton>
    );
}
