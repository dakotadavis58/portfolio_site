import React from "react";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoCol,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
  BtnWrapper,
  Tech,
  TechItem,
} from "./InfoSection.elements";
import { data } from "../../data";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  headline,
  description,
  lightTextDesc,
  liveDemoBtn,
  demoLink,
  sourceCodeBtn,
  sourceCodeLink,
  start,
  img,
  alt,
  id,
  noButtons,
  tech,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Tech>
                  {tech.map((tech) => {
                    return <TechItem key={tech}>{tech}</TechItem>;
                  })}
                </Tech>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {noButtons ? (
                  ""
                ) : (
                  <BtnWrapper>
                    <Link to={sourceCodeLink}>
                      <Button big fontBig primary={primary}>
                        {sourceCodeBtn}
                      </Button>
                    </Link>
                    <Link to={demoLink}>
                      <Button big fontBig primary={primary}>
                        {liveDemoBtn}
                      </Button>
                    </Link>
                  </BtnWrapper>
                )}
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
