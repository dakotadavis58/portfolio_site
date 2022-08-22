import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubtext,
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
      <FooterLinksContainer>
        {/* <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper> */}
      </FooterLinksContainer>
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
            {/* <SocialIconLink href="/" target="_blank" aria-label="twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink> */}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
