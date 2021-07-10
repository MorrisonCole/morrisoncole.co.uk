import React from "react";
import styled from "styled-components";

const Grid = styled.span`
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr min(85ch, 100%) 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    ". header header header ."
    ". content content content ."
    "footer footer footer footer footer";
`;

const Header = styled.div`
  grid-area: header;
`;

const Footer = styled.div`
  grid-area: footer;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid>
      <Header />
      {children}
      <Footer>Morrison Cole</Footer>
    </Grid>
  );
}
