import React from 'react';
import Header from '../../components/header'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const optionsHeader = [
    {id: 'login', type: 'primary', label: t('login')},
    {id: 'login', type: 'secondary', label: t('lang')}
  ]
  return (
    <div className="App">
      <Header btnsArray={optionsHeader} />
    </div>
  )
}

export default Home