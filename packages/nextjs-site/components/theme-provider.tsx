import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export const theme = {
  spacing: [
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
    "12rem",
    "16rem",
    "24rem",
  ],
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
