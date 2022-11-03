import React from "react";
import logo from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";
import { FooterContent } from "./styles";

const Footer = (props) => {
  const { theme } = props;
  return (
    <FooterContent theme={theme}>
      <img src={theme.background === "#FFFFFF" ? logoDark : logo} width={200} />
    </FooterContent>
  );
};

export default Footer;
