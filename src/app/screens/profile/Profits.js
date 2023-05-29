import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { Title, Subtitle, BodyBold } from '../../components/foundation/Typography';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import TableSeed from '../../components/atoms/table/Table';
import { Content, BtnFooter, RowInvestment, ColInvestment, SubInfo } from './styles';
import { mapTableInvesment } from '../../../utils/mappers';
import Section from '../../components/section';
import TitleWithArrow from '../../components/atoms/title-arrow';
import { useTheme } from 'styled-components';

const Profits = (props) => {
  const { userData, actualLang } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const navigate = useNavigate();
  const [table, openTable] = useState(false);
  const titleArr = [t('initiative'), t('amount'), t('date')];
  const body = userData && mapTableInvesment(userData, navigate, actualLang);
  const totalInvested = body.map((i) => i.quantity).reduce((a, b) => a + b);
  const summaryArr = [
    t('totalInvested'),
    totalInvested,
    ` ${t('totalOf')} ${totalInvested * 1000} USD`
  ];

  return (
    <Content>
      <TitleWithArrow color={theme.colors.green} title={t('profitTable')} />
      <Section customWidth={width}>
        <RowInvestment>
          <ColInvestment>
            <Subtitle>{t('totalProfits')}</Subtitle>
            <Title>{`-`}</Title>
          </ColInvestment>
          <ColInvestment>
            <Subtitle>{t('investments')}</Subtitle>
            <Title>{userData.iniciativesSupported?.length}</Title>
          </ColInvestment>
        </RowInvestment>
        {table && (
          <>
            <TableSeed headArr={titleArr} bodyArr={body} summary={summaryArr} enableBtn />
          </>
        )}
        <BtnFooter>
          {userData.iniciativesSupported?.length === 0 && (
            <SubInfo>
              <BodyBold>{t('withoutInvestments')}</BodyBold>
            </SubInfo>
          )}
          <SecondaryBtn
            fontSize={width > 500 ? width * 0.02 : width * 0.07}
            onClick={() =>
              userData.iniciativesSupported?.length > 0 ? openTable(!table) : navigate('/projects')
            }
            label={table ? t('noSeeInvestments') : t('seeInvestments')}
          />
        </BtnFooter>
      </Section>
    </Content>
  );
};

export default Profits;
