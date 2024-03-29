import styled from "styled-components";
import { COLORS } from "../../globalStyles";
import { mobile } from "../../responsive";

const { purple, lightPurp, darkBg, almostWhite, lightGrey } = COLORS;

export const InfoSec = styled.div`
  color: ${almostWhite};
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? almostWhite : darkBg)};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoCol = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  * {
    margin: 5px 10px;
    text-decoration: none;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? lightPurp : purple)};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? almostWhite : darkBg)};
`;

export const Tech = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
  width: 100%;
  max-width: 100%;
`;
export const TechItem = styled.span`
  background-color: ${({ lightBg }) => (lightBg ? almostWhite : darkBg)};
  color: ${({ lightBg }) => (lightBg ? darkBg : almostWhite)};
  display: flex;
  margin: 0.4rem;
  padding: 0.8rem;
  letter-spacing: 1px;
  border-radius: 0.8rem;
  font-size: 1.2rem;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? lightGrey : darkBg)};
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Img = styled.img`
  padding-right: 0;
  border-radius: 10%;
  max-width: 100%;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;
