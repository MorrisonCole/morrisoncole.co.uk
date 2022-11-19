import React, { useContext } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import gitHub from "prism-react-renderer/themes/github";
import { ThemeContext } from "../../theme";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/system";

type CodeProps = {
  children: JSX.Element;
  className: string;
};

export function Code({ children, className }: CodeProps): JSX.Element {
  const { paletteMode } = useContext(ThemeContext);
  const theme = useTheme();
  const language = className.replace(/language-/gm, "") as Language;

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
        code={children}
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
            {tokens.slice(0, -1).map((line, i) => (
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
