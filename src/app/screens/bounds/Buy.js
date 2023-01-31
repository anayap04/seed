import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../../components/atoms/buttons/Primary";
import { TableRoot } from "../../components/atoms/table/styles";
import {
  Body,
  BodyBold,
  H2,
  Subtitle,
  SubtitleHighlight,
  Title,
} from "../../components/foundation/Typography";
import Header from "../../components/header";
import Section from "../../components/section";
import { Row, Col } from "react-bootstrap";
import {
  Root,
  Counter,
  TableContainer,
  BtnContainer,
  CounterLabel,
  Instrunctions,
} from "./styles";
import CardPayment from "../../components/card-payment/CardPayment";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "react-bootstrap/Form";
import payment from '../../../assets/imgs/qr_payment.png'
const stripePromise = loadStripe(
  "pk_test_51M3u1vIzcGFb48GUz20hBuQXzMnrROio40lA80MYMQPJYipl6b5PMBNkb6QuweQ4emGR2bAAZdz2zIgeUMvLhzJG00HVhNYGQt"
);

const Buy = (props) => {
  const { theme, mode, themeToggler } = props;
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [card, showCard] = useState(false);
  const [option, showOption] = useState("card");
  const { width } = useWindowDimensions();
  const boundCost = 1000;

  return (
    <Root theme={theme}>
      <Header
        mode={mode}
        themeToggler={themeToggler}
        theme={theme}
        btnsArray={["lang", "mode", "logout", "projects", "profile"]}
      />
      <Row xl={1}>
        <Col sm={12} md={12} lg={6} xl={6}>
          <Title theme={theme}>{t("buyBonds")}</Title>
          <Subtitle theme={theme}>{t("selectAmount")}</Subtitle>
          <Counter>
            <PrimaryBtn
              disable={counter === 0}
              onClick={() => !card && setCounter(counter - 1)}
              theme={theme}
              label="-"
              margin={10}
            />
            <CounterLabel>
              {" "}
              <H2 theme={theme}>{counter}</H2>
            </CounterLabel>
            <PrimaryBtn
              theme={theme}
              label="+"
              onClick={() => !card && setCounter(counter + 1)}
              margin={10}
            />
          </Counter>
          <TableContainer>
            <Section
              customWidth={width > 500 ? 550 : width * 0.9}
              theme={theme}
            >
              <TableRoot theme={theme} borderless>
                <thead>
                  <tr>
                    <th>
                      <Subtitle theme={theme}>{t("concept")}</Subtitle>
                    </th>
                    <th>
                      <Subtitle theme={theme}>{t("val")}</Subtitle>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Body theme={theme}>{t("unitVal")}</Body>
                    </td>
                    <td>
                      <BodyBold theme={theme}>{boundCost + " USD"}</BodyBold>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Body theme={theme}>{t("boundsBought")}</Body>
                    </td>
                    <td>
                      <BodyBold theme={theme}>{counter}</BodyBold>
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>
                      <Subtitle theme={theme}>{t("total")}</Subtitle>
                    </th>
                    <th>
                      <SubtitleHighlight theme={theme}>{`${
                        counter * boundCost
                      } USD`}</SubtitleHighlight>
                    </th>
                  </tr>
                </thead>
              </TableRoot>
            </Section>
          </TableContainer>
          <BtnContainer>
            <PrimaryBtn
              onClick={() => showCard(true)}
              theme={theme}
              label={t("proceedCheck")}
              width={width > 500 ? 550 : width * 0.9}
              margin={3}
              disabled={counter <= 0}
            />
          </BtnContainer>
        </Col>
        <Col>
          {card && (
            <Form>
              {["radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    reverse
                    label={t("payCard")}
                    name="group1"
                    type={type}
                    id={`reverse-${type}-1`}
                    aria-label={t("payCard")}
                    onChange={() => showOption("card")}
                  />
                  {option === "card" && (
                    <Elements stripe={stripePromise}>
                      <CardPayment total={counter * boundCost} theme={theme} />
                    </Elements>
                  )}
                  <Form.Check
                    reverse
                    label={t("payCrypto")}
                    name="group1"
                    type={type}
                    id={`reverse-${type}-2`}
                    aria-label={t("payCrypto")}
                    onChange={() => showOption("crypto")}
                  />
                  {option === "crypto" && (
                    <Instrunctions>
                      <Subtitle theme={theme}>
                        {"Instrucciones de pago"}
                      </Subtitle>
                      <Body theme={theme}>
                        {
                          "1. Escánea nuestro código QR y sigue las Instrucciones"
                        }
                      </Body>
                      <img src={payment} />
                      <Body theme={theme}>
                        {
                          `2. Una vez haya hecho el pago puedes enviarnos el comprobante 
                          a nuestro correo o a nuestro WhatsApp 
                          y se te cargarán los créditos`
                        }
                      </Body>
                    </Instrunctions>
                  )}
                </div>
              ))}
            </Form>
          )}
        </Col>
      </Row>
    </Root>
  );
};

export default Buy;
