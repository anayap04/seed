import React from 'react';
import veleta from '../../../assets/imgs/veleta.png';
import capex from '../../../assets/imgs/capexp.png';
import green from '../../../assets/imgs/green.png';
import csci from '../../../assets/imgs/csci.png';
import positive from '../../../assets/imgs/positive.png';
import { useTranslation } from 'react-i18next';
import { PartnersLogos, RootPartners, RowPartners } from './styles';
import { useTheme } from 'styled-components';
import TitleWithArrow from '../../components/atoms/title-arrow';

const Partners = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const imgsArr1 = [
    { id: 'veleta', url: veleta, width: 250 },
    { id: 'capexp', url: capex, width: 500 }
  ];
  const imgsArr2 = [
    { id: 'green', url: green, width: 500 },
    { id: 'csci', url: csci, width: 280 },
    { id: 'positive', url: positive, width: 250 }
  ];

  const renderImg = (img) => <img width={img.width} src={img.url} key={img.id} />;

  return (
    <RootPartners>
      <TitleWithArrow title={t('partners')} color={theme.colors.nero} />
      <PartnersLogos>
        <RowPartners>{imgsArr1.map((img) => renderImg(img))}</RowPartners>
        <RowPartners>{imgsArr2.map((img) => renderImg(img))}</RowPartners>
      </PartnersLogos>
    </RootPartners>
  );
};

export default Partners;
