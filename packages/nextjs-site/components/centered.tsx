import styled from "styled-components";

const Div = styled.div`
  max-width: ${(props) => props.theme.spacing[12]};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => props.theme.spacing[5]};
  padding-right: ${(props) => props.theme.spacing[5]};
`;

export function Centered({ children }: { children: React.ReactNode }) {
  return <Div>{children}</Div>;
}
