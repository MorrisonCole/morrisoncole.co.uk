import React from "react";
import styled from "styled-components";
import { Footer } from "./footer";

const Grid = styled.span`
  min-height: 100%;
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

const Content = styled.div`
  grid-area: content;
`;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Grid>
  );
}
