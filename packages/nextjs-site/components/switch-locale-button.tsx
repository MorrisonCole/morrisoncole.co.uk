import { useRouter } from "next/router";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 100%;
  background: hsla(0, 0%, 25%, 0.6);
  color: hsl(0, 0%, 100%);
  border: 2px solid white;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const SwitchLocaleButton = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const targetLocale = router.locale === "ja-JP" ? "en-GB" : "ja-JP";

  const handleClick = () => {
    router.push({ pathname, query }, asPath, { locale: targetLocale });
  };

  return <Button onClick={handleClick}>{`Switch to ${targetLocale}`}</Button>;
};
