import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableRoot } from '../../components/atoms/table/styles';
import {
  Body,
  BodyBold,
  H2Bold,
  Subtitle,
  SubtitleHighlight,
  Title
} from '../../components/foundation/Typography';
import { Row, Col } from 'react-bootstrap';
import {
  Root,
  Counter,
  TableContainer,
  BtnContainer,
  CounterLabel,
  Instrunctions,
  ColPay
} from './styles';
import CardPayment from '../../components/card-payment/CardPayment';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Form from 'react-bootstrap/Form';
import payment from '../../../assets/imgs/qr_payment.png';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import PrimaryBtn from '../../components/atoms/buttons/Primary';
const stripePromise = loadStripe(
  'pk_test_51M3u1vIzcGFb48GUz20hBuQXzMnrROio40lA80MYMQPJYipl6b5PMBNkb6QuweQ4emGR2bAAZdz2zIgeUMvLhzJG00HVhNYGQt'
);

const Buy = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [card, showCard] = useState(false);
  const [option, showOption] = useState('card');
  const { width } = useWindowDimensions();
  const theme = useTheme() || DefaultTheme;
  const boundCost = 1000;

  return (
    <Root>
      <Row xl={1}>
        <Col sm={12} md={12} lg={6} xl={6}>
          <Title color={theme.colors.white}>{t('buyBonds')}</Title>
          <Subtitle color={theme.colors.white}>{t('selectAmount')}</Subtitle>
          <Counter>
            <SecondaryBtn
              background={theme.colors.green}
              disable={counter === 0}
              onClick={() => !card && setCounter(counter - 1)}
              label="-"
              margin={10}
            />
            <CounterLabel>
              <H2Bold color={theme.colors.green}>{counter}</H2Bold>
            </CounterLabel>
            <SecondaryBtn
              background={theme.colors.green}
              label="+"
              onClick={() => !card && setCounter(counter + 1)}
              margin={10}
            />
          </Counter>
          <TableContainer>
            <TableRoot borderless>
              <thead>
                <tr>
                  <th>
                    <Subtitle>{t('concept')}</Subtitle>
                  </th>
                  <th>
                    <Subtitle>{t('val')}</Subtitle>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Body>{t('unitVal')}</Body>
                  </td>
                  <td>
                    <BodyBold>{boundCost + ' USD'}</BodyBold>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Body>{t('boundsBought')}</Body>
                  </td>
                  <td>
                    <BodyBold>{counter}</BodyBold>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>
                    <Subtitle>{t('total')}</Subtitle>
                  </th>
                  <th>
                    <SubtitleHighlight>{`${counter * boundCost} USD`}</SubtitleHighlight>
                  </th>
                </tr>
              </thead>
            </TableRoot>
          </TableContainer>
          <BtnContainer>
            <PrimaryBtn
              onClick={() => showCard(true)}
              label={t('proceedCheck')}
              width={width > 500 ? 550 : width * 0.9}
              margin={3}
              disabled={counter <= 0}
            />
          </BtnContainer>
        </Col>
        <ColPay>
          {card && (
            <Form>
              {['radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    reverse
                    label={t('payCard')}
                    name="group1"
                    style={{ color: theme.colors.white }}
                    type={type}
                    id={`reverse-${type}-1`}
                    aria-label={t('payCard')}
                    onChange={() => showOption('card')}
                  />
                  {option === 'card' && (
                    <Elements stripe={stripePromise}>
                      <CardPayment total={counter * boundCost} />
                    </Elements>
                  )}
                  <Form.Check
                    reverse
                    label={t('payCrypto')}
                    name="group1"
                    style={{ color: theme.colors.white }}
                    type={type}
                    id={`reverse-${type}-2`}
                    aria-label={t('payCrypto')}
                    onChange={() => showOption('crypto')}
                  />
                  {option === 'crypto' && (
                    <Instrunctions>
                      <Subtitle>{t('stepsBegin')}</Subtitle>
                      <Body>{t('stepOnePay')}</Body>
                      <img src={payment} />
                      <Body>{t('stepTwoPay')}</Body>
                    </Instrunctions>
                  )}
                </div>
              ))}
            </Form>
          )}
        </ColPay>
      </Row>
    </Root>
  );
};

export default Buy;
