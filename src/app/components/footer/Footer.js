import React from "react";
import logo from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";
import {
  FooterContent,
  ImageContainer,
  SocialNetworkContainer,
  ContactContainer,
  IconRows,
} from "./styles";
import { Body } from "../foundation/Typography";
import LinkBtn from "../../components/atoms/buttons/Link";
import IconBtn from "../atoms/buttons/IconBtn";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const { theme, isFixed } = props;
  const navigate = useNavigate();
  return (
    <FooterContent isFixed={isFixed} theme={theme}>
      <ImageContainer>
        <img
          src={theme.background === "#FFFFFF" ? logoDark : logo}
          width={200}
        />
      </ImageContainer>
      <SocialNetworkContainer>
        <IconRows>
          <IconBtn iconName="Linkedin" theme={theme} />{" "}
          <IconBtn iconName="Instagram" theme={theme} />{" "}
          <IconBtn iconName="Twitter" theme={theme} />{" "}
        </IconRows>
        <Body theme={theme}>{"© 2023 SEED"}</Body>
      </SocialNetworkContainer>
      <ContactContainer>
        <LinkBtn
          fontSize={28}
          theme={theme}
          label={"Contacto"}
          onClick={() => navigate("/contact")}
        />
      </ContactContainer>
    </FooterContent>
  );
};

export default Footer;
