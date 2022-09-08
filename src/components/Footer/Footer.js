import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterSubHeading,
  FooterSubscription,
  Form,
  FormInput,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialMedia,
  FakeForm,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Feel free to contact me for more information!
        </FooterSubHeading>
        {/* <FooterSubtext>
          I look forward to working with you
        </FooterSubtext> */}
        <Form>
          <FormInput
            name="nameidk"
            type="text"
            placeholder="Your name"
            maxLength={100}
            required
          ></FormInput>
          <FormInput
            name="emailidk"
            type="text"
            placeholder="Your email"
            required
          ></FormInput>
          <FormInput
            name="messageidk"
            type="text"
            placeholder="Subject"
            maxLength={255}
            required
          ></FormInput>
          <FakeForm
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Your name"
          ></FakeForm>
          <FakeForm
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Your email"
          ></FakeForm>
          <Button fontBig primary>
            Submit
          </Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer></FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Dakota Davis
          </SocialLogo>
          <WebsiteRights>Dakota Davis © 2022</WebsiteRights>
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
    </FooterContainer>
  );
};

export default Footer;
