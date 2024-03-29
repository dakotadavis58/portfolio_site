import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  secondaryCol: "#d966ff",
  primaryCol: "#9900cc",
  primaryGreen: "#219c1f",
  lightGreen: "#2dd52a",
  darkGreen: "#041504",
  purple: "#9900cc",
  lightPurp: "#d966ff",
  darkBg: "#111111",
  almostWhite: "#ebebeb",
  lightGrey: "#a9b3c1",
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        scroll-behavior: smooth;
    }
    html {
        font-size: 62.5%;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? COLORS.purple : COLORS.lightPurp)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.2rem 6.4rem" : "1rem 2rem")};
  color: ${COLORS.almostWhite};
  font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ primary }) => (primary ? COLORS.darkBg : COLORS.almostWhite)};
    background: ${({ primary }) =>
      primary ? COLORS.lightPurp : COLORS.purple};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 20px;
  }
`;

export default GlobalStyle;
