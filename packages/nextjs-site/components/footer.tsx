import styled from "styled-components";

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: rgb(66, 66, 66);
  padding: ${(props) => props.theme.spacing[6]};
`;

export function Footer() {
  return (
    <FooterContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{"Handcrafted with TypeScript, React, and Next.js"}</p>
        <p>{`\u{00A9} Morrison Cole ${new Date().getFullYear()}`}</p>
      </div>
    </FooterContainer>
  );
}
