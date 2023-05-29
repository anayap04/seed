import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FaqContainer,
  ViewQA,
  QuestionContent,
  BodyContent,
  IconContainer,
  TitleContainer
} from './styles';
import { Body, H2Bold, Subtitle } from '../../components/foundation/Typography';
import Icon from '../../components/foundation/Icon';
import { useTheme } from 'styled-components';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';

const Faq = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [optionSelected, setOptionSelected] = useState(null);
  const navigate = useNavigate();
  const optionsArr = [
    { question: t('questionWhat'), answer: t('answerWhat'), id: 0 },
    { question: t('questionHow'), answer: t('answerHow'), id: 1 },
    { question: t('questionIAm'), answer: t('answerIAm'), id: 2 },
    { question: t('questionRisk'), answer: t('asnwerRisk'), id: 3 },
    { question: t('questionIncomplete'), answer: t('answerIncomplete'), id: 4 },
    { question: t('questionTir'), answer: t('answerTir'), id: 5 },
    { question: t('questionWhoInvest'), answer: t('answerWhoInvest'), id: 6 },
    { question: t('questionMoney'), answer: t('answerMoney'), id: 7 },
    { question: t('questionFarm'), answer: t('answerFarm'), id: 8 },
    { question: t('questionBonds'), answer: t('answerBonds'), id: 9 },
    { question: t('questionContracts'), answer: t('answerBonds'), id: 10 },
    { question: t('questionBuy'), answer: t('answerBuy'), id: 11 },
    { question: t('questionWhen'), answer: t('answerWhen'), id: 12 },
    { question: t('questionCheck'), answer: t('answerCheck'), id: 13 },
    { question: t('questionGain'), answer: t('answerGain'), id: 14 }
  ];

  const btnsArray = [
    {
      id: 'about',
      color: theme.colors.nero,
      label: t('about'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'about'
          }
        })
    },
    {
      id: 'how',
      color: theme.colors.nero,
      label: t('howTo'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'how'
          }
        })
    },
    {
      id: 'projects',
      color: theme.colors.nero,
      label: t('projects'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'projects'
          }
        })
    },
    {
      id: 'faq',
      color: theme.colors.nero,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const mapItemFaq = (item) => (
    <ViewQA
      key={item.id}
      isActive={optionSelected === item.id}
      onClick={() => setOptionSelected(item.id)}>
      <QuestionContent>
        <Icon
          size={20}
          iconName={optionSelected === item.id ? 'ArrowDown' : 'ArrowRight'}
          tintColor={theme.colors.nero}
        />
        <Subtitle>{item.question}</Subtitle>
      </QuestionContent>
      {optionSelected === item.id && (
        <BodyContent>
          <Body>{item.answer}</Body>
        </BodyContent>
      )}
    </ViewQA>
  );

  return (
    <FaqContainer>
      <Header btnsArray={btnsArray} colorBack={true} hideLogin={true} />
      <TitleContainer>
        <IconContainer>
          <Icon iconName="Inevestment" size={30} tintColor={theme.colors.nero} />
        </IconContainer>

        <H2Bold>{t('faqTitleComplete')}</H2Bold>
      </TitleContainer>
      {optionsArr.map((item) => mapItemFaq(item))}
    </FaqContainer>
  );
};

export default Faq;
