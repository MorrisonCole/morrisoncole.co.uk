import { useRouter } from "next/router";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 10rem;
  background: rgba(64, 64, 64, 60);
  color: white;
  border: 2px solid white;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const SwitchLocaleButton = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const targetLocale = router.locale === "ja_JP" ? "en_GB" : "ja_JP";

  const handleClick = () => {
    router.push({ pathname, query }, asPath, { locale: targetLocale });
  };

  return <Button onClick={handleClick}>{`Switch to ${targetLocale}`}</Button>;
};
