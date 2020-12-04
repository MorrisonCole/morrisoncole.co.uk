import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import gitHub from "prism-react-renderer/themes/github";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ThemeContext } from "../../theme";
import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    codePaper: {
      width: "100%",
      justifySelf: "center",
      gridColumn: "2 / 5 !important",
      marginBottom: theme.spacing(2),
      backgroundColor: "transparent",
    },
    code: {
      padding: theme.spacing(2),
      fontSize: "16px",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      margin: 0,
      borderRadius: "4px",
    },
  })
);

interface Props {
  codeString: string;
  language: Language;
}

export function Code({ codeString, language, ...props }: Props): JSX.Element {
  const classes = useStyles();
  const { paletteType } = React.useContext(ThemeContext);

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Paper className={classes.codePaper} elevation={3}>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={paletteType === "dark" ? vsDark : gitHub}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={classNames(className, classes.code)} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Paper>
    );
  }
}
