import React, { useContext } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import gitHub from "prism-react-renderer/themes/github";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ThemeContext } from "../../theme";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/system";

interface Props {
  codeString: string;
  language: Language;
}

export function Code({ codeString, language, ...props }: Props): JSX.Element {
  const { paletteMode } = useContext(ThemeContext);
  const theme = useTheme();

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
      <Paper
        sx={{
          width: "100%",
          justifySelf: "center",
          gridColumn: "2 / 5 !important",
          marginBottom: (theme) => theme.spacing(2),
          backgroundColor: "transparent",
        }}
        elevation={3}
      >
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={paletteMode === "dark" ? vsDark : gitHub}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                padding: theme.spacing(2),
                fontSize: "1rem",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
                borderRadius: "4px",
                ...style,
              }}
            >
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
