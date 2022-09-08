import styled from "styled-components";
import { BsArrowDownCircle } from "react-icons/bs";
import { Button, COLORS } from "../../globalStyles";

const { secondaryCol } = COLORS;

export const HeroSec = styled.div`
  color: #fff;
  padding: 160px 0;
  height: 94vh;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-position: 50% 50%;
  justify-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 94vh;
  width: 100%;
  top: 80px;
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
  font-size: 24px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 54px;
  line-height: 1.1;
  color: white;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 24px;
  color: #747e8c;
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
  font-size: 3rem;
`;
export const NavIcon = styled(BsArrowDownCircle)`
  margin-right: 0.5rem;
`;

export const Resume = styled(Button)`
  margin-top: 70px;
  max-width: 200px;
`;
