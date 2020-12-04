import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import gitHub from "prism-react-renderer/themes/github";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ThemeContext } from "../../theme";

interface Props {
  codeString: string;
  language: Language;
}

export const Code = ({
  codeString,
  language,
  ...props
}: Props): JSX.Element => {
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
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={paletteType === "dark" ? vsDark : gitHub}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
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
    );
  }
};
