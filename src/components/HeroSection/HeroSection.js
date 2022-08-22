import React from "react";
import { Container } from "../../globalStyles";
import {
  HeroCol,
  HeroSec,
  Overlay,
  ProjectsButton,
  Resume,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  Subtitle,
  TextWrapper,
  Title,
  TopLine,
} from "./HeroSection.elements";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <HeroSec>
        <Container>
          <HeroCol>
            <Overlay>
              <TextWrapper>
                <TopLine>Hi, my name is</TopLine>
                <Title>Dakota Davis</Title>
                <Subtitle>Web Developer</Subtitle>
                <SocialMedia>
                  <SocialMediaWrap>
                    <SocialIcons>
                      <SocialIconLink
                        href="https://www.linkedin.com/in/dakota-davis-929213220/"
                        target="_blank"
                        aria-label="linkedin"
                      >
                        <FaLinkedin />
                      </SocialIconLink>
                      <SocialIconLink
                        href="https://github.com/dakotadavis58"
                        target="_blank"
                        aria-label="github"
                      >
                        <FaGithub />
                      </SocialIconLink>
                    </SocialIcons>
                  </SocialMediaWrap>
                </SocialMedia>
                <Resume primary>Download Resume</Resume>
                <ProjectsButton href="#first_project">
                  <BsArrowDownCircle />
                </ProjectsButton>
              </TextWrapper>
            </Overlay>
          </HeroCol>
        </Container>
      </HeroSec>
    </>
  );
};

export default HeroSection;
