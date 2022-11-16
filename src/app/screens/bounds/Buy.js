import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../../components/atoms/buttons/Primary";
import { TableRoot } from "../../components/atoms/table/styles";
import {
  Body,
  BodyBold,
  Subtitle,
  SubtitleHighlight,
  Title,
} from "../../components/foundation/Typography";
import Header from "../../components/header";
import Section from "../../components/section";
import { Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import { Root, Counter, TableContainer, BtnContainer } from "./styles";
import CardPayment from "../../components/card-payment/CardPayment";

const Buy = (props) => {
  const { theme, mode, themeToggler } = props;
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [card, showCard] = useState(false);
  const boundCost = 1000;

  return (
    <Root theme={theme}>
      <Header
        mode={mode}
        themeToggler={themeToggler}
        theme={theme}
        btnsArray={["lang", "mode", "logout", "projects", "profile"]}
      />
      <Row>
        <Col>
      <Title theme={theme}>{t("buyBonds")}</Title>
      <Subtitle theme={theme}>{t("selectAmount")}</Subtitle>
      <Counter>
        <PrimaryBtn
          disable={counter === 0}
          onClick={() => !card && setCounter(counter - 1)}
          theme={theme}
          label="-"
        />{" "}
        <BodyBold>{counter}</BodyBold>{" "}
        <PrimaryBtn
          theme={theme}
          label="+"
          onClick={() => !card && setCounter(counter + 1)}
        />
      </Counter>
      <TableContainer>
      <Section customWidth={500} theme={theme}>
        <TableRoot theme={theme} borderless>
          <thead>
            <tr>
              <th>
                <Subtitle theme={theme}>{t('concept')}</Subtitle>
              </th>
              <th>
                <Subtitle theme={theme}>{t('val')}</Subtitle>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Body theme={theme}>{t('unitVal')}</Body>
              </td>
              <td>
                <BodyBold theme={theme}>{boundCost + " USD"}</BodyBold>
              </td>
            </tr>
            <tr>
              <td>
                <Body theme={theme}>{t('boundsBought')}</Body>
              </td>
              <td>
                <BodyBold theme={theme}>{counter}</BodyBold>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>
                <Subtitle theme={theme}>{t('total')}</Subtitle>
              </th>
              <th>
                <SubtitleHighlight theme={theme}>{`${counter * boundCost} USD`}</SubtitleHighlight>
              </th>
            </tr>
          </thead>
        </TableRoot>
      </Section>
      </TableContainer>
      <BtnContainer>
      <PrimaryBtn onClick={() => showCard(true)} theme={theme} label={t('proceedCheck')} width={450} />
      </BtnContainer>
      </Col>
      <Col>
      { card && <CardPayment total={counter * boundCost} theme={theme} />}
      </Col>
      </Row>
      <Footer isFixed theme={theme} />
    </Root>
  );
};

export default Buy;
