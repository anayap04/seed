import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/atoms/input";
import MapLocation from "../../components/atoms/map";
import TextArea from "../../components/atoms/textarea";
import { Body, Subtitle, Title } from "../../components/foundation/Typography";
import Header from "../../components/header";
import {
  Root,
  ContactSection,
  Container,
  BtnSubmit,
  LocationSection,
  SuccessIndicator,
} from "./styles";
import emailjs from "@emailjs/browser";
import { isMobile } from "react-device-detect";
import useWindowDimensions from "../../../utils/useWindowDimensions";

const Contact = (props) => {
  const { theme, mode, themeToggler } = props;
  const { register } = useForm();
  const btnsArray = ["home", "lang", "mode"];
  const form = useRef();
  const { width } = useWindowDimensions();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7u028i9",
        "template_kf690gj",
        form.current,
        "bpMGSs6Y7qkYjX4yF"
      )
      .then(
        (result) => {
          if (result) setEmailSent(true);
      
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Root>
      <Header
        theme={theme}
        mode={mode}
        themeToggler={themeToggler}
        btnsArray={btnsArray}
      />
      <Container isMobile={isMobile}>
        <ContactSection isMobile={isMobile}>
         
          <Title theme={theme}>{"Contáctanos"}</Title>
          
          <Body theme={theme}>
            {"Puedes enviarnos todas tus dudas a nuestro correo"}
          </Body>
          {emailSent && (
            <SuccessIndicator isMobile={isMobile} theme={theme}>
              <Body theme={theme}>
                {
                  "Su mensaje ha sido enviado. Le contestaremos lo más pronto posible"
                }
              </Body>
            </SuccessIndicator>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <Input
              theme={theme}
              labelTitle={"Nombre Completo"}
              label="name"
              register={register}
              required
              customWidth={isMobile ? width * 0.8 : 400}
              name="user_name"
            />
            <Input
              theme={theme}
              labelTitle={"Correo Electrónico"}
              label="mail"
              register={register}
              required
              customWidth={isMobile ? width * 0.8 : 400}
            />

            <TextArea
              label="message"
              register={register}
              theme={theme}
              labelTitle="Mensaje"
              width={isMobile ? width * 0.8 : 400}
            />
            <BtnSubmit
              width={isMobile ? width * 0.8 : 400}
              value="Enviar"
              theme={theme}
            />
          </form>
        </ContactSection>
        <LocationSection isMobile={isMobile}>
          <Title theme={theme}>{"Ubicación"}</Title>
          <Subtitle theme={theme}>{"SEED"}</Subtitle>
          <Body theme={theme}>{"Cra. 46 #90-17 Of 401, Barranquilla, Atlántico"}</Body>
          <Body theme={theme}>{"(+57) 3 78 70 43"}</Body>
          <MapLocation zoomLevel={17} isMobile={isMobile} />
        </LocationSection>
      </Container>
    </Root>
  );
};

export default Contact;
