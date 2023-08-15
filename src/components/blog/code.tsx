import React, { useContext } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { ThemeContext } from "../../theme";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/system";

type CodeProps = {
  code: string;
  className: string;
};

export function Code({ code, className }: CodeProps): JSX.Element {
  const { paletteMode } = useContext(ThemeContext);
  const theme = useTheme();
  const language = className.replace(/language-/gm, "");

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
        code={code}
        language={language}
        theme={paletteMode === "dark" ? themes.vsDark : themes.github}
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
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Paper>
  );
}
