import styled from "styled-components";
import { BsArrowDownCircle } from "react-icons/bs";
import { Button, COLORS } from "../../globalStyles";
import { mobile } from "../../responsive";

const { secondaryCol } = COLORS;

export const HeroSec = styled.div`
  color: #fff;
  padding: 160px 0;
  height: 100vh;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-position: 50% 50%;
  justify-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0;
  background: rgba(17, 17, 17, 0.8);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 80%;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : secondaryCol)};
  font-size: 30px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  ${mobile({ fontSize: "22px" })}
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 60px;
  line-height: 1.1;
  color: white;
  ${mobile({ fontSize: "45px" })}
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 28px;
  line-height: 24px;
  color: #b6b4b8;
  ${mobile({ fontSize: "24px" })}
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 38px;
  transition: all 0.3s ease;

  &:hover {
    color: ${secondaryCol};
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;
export const ProjectsButton = styled.a`
  position: absolute;
  top: 80vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 40px;
  color: #fff;
  max-width: 40px;
  cursor: pointer;
  font-size: 4rem;
`;
export const NavIcon = styled(BsArrowDownCircle)`
  margin-right: 0.5rem;
`;

export const Resume = styled.a`
  text-decoration: none;
  margin-top: 8rem;
  max-width: 300px;
  display: inline-block;
  font-size: larger;
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
    margin: 20px;
  }
`;
