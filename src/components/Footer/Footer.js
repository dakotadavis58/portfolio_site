import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../../globalStyles";
import { send } from "emailjs-com";
import axios from "axios";
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
  Left,
  Center,
  Links,
  NormLink,
} from "./Footer.elements";
import { links } from "../../data";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  const initialState = {
    nameidk: "",
    emailidk: "",
    messageidk: "",
    name: "",
    email: "",
  };
  const [inputs, setInputs] = useState({
    nameidk: "",
    emailidk: "",
    messageidk: "",
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.name || inputs.email) {
      console.log("No spam allowed");
      return;
    } else {
      send("service_z5llvnw", "template_go9t41c", inputs, "Gzf-kee83gky8UZqw")
        .then((res) => {
          console.log(`Success:`, res.status, res.text);
          console.log(inputs);
        })
        .catch((err) => {
          console.log("Failed: ", err);
        });
    }
    setInputs(initialState);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Feel free to contact me for more information!
        </FooterSubHeading>
        {/* <FooterSubtext>
          I look forward to working with you
        </FooterSubtext> */}
        <Form id="contact" onSubmit={handleSubmit}>
          <FormInput
            name="nameidk"
            type="text"
            value={inputs.nameidk}
            placeholder="Your name"
            onChange={handleChange}
            maxLength={100}
            required
          ></FormInput>
          <FormInput
            name="emailidk"
            type="email"
            value={inputs.emailidk}
            placeholder="Your email"
            onChange={handleChange}
            required
          ></FormInput>
          <FormInput
            name="messageidk"
            type="text"
            value={inputs.messageidk}
            placeholder="Message"
            onChange={handleChange}
            maxLength={255}
            required
          ></FormInput>
          <FakeForm
            autoComplete="off"
            name="name"
            type="text"
            value={inputs.name}
            placeholder="Your name"
            onChange={handleChange}
          ></FakeForm>
          <FakeForm
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Your email"
            value={inputs.email}
            onChange={handleChange}
          ></FakeForm>
          <Button type="submit" fontBig primary>
            Submit
          </Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer></FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <Left>
            <SocialLogo to="/">Dakota Davis</SocialLogo>
            <WebsiteRights>© 2022, Built by Dakota Davis </WebsiteRights>
          </Left>
          <Center>
            Links
            <Links>
              {links.map((link) => {
                return (
                  <NormLink key={link.label} href={link.to}>
                    {link.label}
                  </NormLink>
                );
              })}
              <SocialIconLink></SocialIconLink>
            </Links>
          </Center>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/dakota-davis-929213220/"
              target="_blank"
              aria-label="linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="mailto:dakota@dakotadavis.me"
              target="_blank"
              aria-label="email"
            >
              <AiTwotoneMail />
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
