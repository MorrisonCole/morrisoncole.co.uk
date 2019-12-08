import {createStyles, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SvgIcon, {SvgIconProps} from "@material-ui/core/SvgIcon";
import React from "react";
import SocialIcon from "./social_icon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            fontSize: "3.5rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: "2.5rem",
            },
            color: "#f48024",
        },
    }),
);

function StackOverflowIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.5 16.5h-5v-1h5v1zm3-5.832l-.811-4.668-.996.173.81 4.668.997-.173zm-2.982 3.468l-4.873-.488-.093 1.008 4.878.439.088-.959zm.269-1.293l-4.639-1.304-.263.977 4.653 1.25.249-.923zm.602-1.207l-4.149-2.432-.514.871 4.148 2.433.515-.872zm.933-.734l-2.67-3.914-.836.569 2.67 3.915.836-.57zm-1.322 2.098v4h-6v-4h-1v5h8v-5h-1z"/>
        </SvgIcon>
    );
}

export default function StackOverflowSocialIcon() {
    const classes = useStyles();

    return (
        <SocialIcon ariaLabel={"Stack Overflow"}
                    href={"https://stackoverflow.com/users/516642/morrison-cole?tab=profile"}
                    icon={<StackOverflowIcon className={classes.icon}/>}/>
    );
}
