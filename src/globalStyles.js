import styled, { createGlobalStyle } from "styled-components";

const primaryCol = "#219c1f";
const secondaryCol = "#0467FB";
export const COLORS = {
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
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${COLORS.almostWhite};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
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
