import styled from "styled-components";

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: hsl(0, 0%, 26%);
  padding: ${(props) => props.theme.spacing[6]};
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{"Handcrafted with TypeScript, React, and Next.js"}</p>
        <p>{`\u{00A9} Morrison Cole ${currentYear}`}</p>
      </div>
    </FooterContainer>
  );
}
