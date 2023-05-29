import React from 'react';
import './App.css';
import ThemeProvider from './theme/ThemeProvider';
import ScrollToTop from './utils/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/screens/home/Home';
import LoginPage from './app/screens/login';
import Profile from './app/screens/profile';
import GlobalStyles from './theme/GlobalStyles';
import ProjectsMain from './app/screens/projects/Projects';
import InitiativeDetail from './app/screens/detail/InitiativeDetails';
import Buy from './app/screens/bounds/Buy';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import imageChat from './assets/imgs/operator.png';
import Footer from './app/components/footer/Footer';
import Contact from './app/screens/contact';
import GeneralInfo from './app/screens/info/Generalnfo';
import NotFound from './app/screens/error/NotFound';

import { DefaultTheme } from './theme/themes';
import { useTranslation } from 'react-i18next';
import Faq from './app/screens/faq/FAQ';

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/seed">
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<LoginPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/projects" element={<ProjectsMain />}></Route>
          <Route path="/initiative" element={<InitiativeDetail />}></Route>
          <Route path="/buyBonds" element={<Buy />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/info" element={<GeneralInfo />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
        </Routes>
        <FloatingWhatsApp
          chatMessage={t('chatMessage')}
          statusMessage={t('statusMessage')}
          accountName={t('accountName')}
          phoneNumber="573148124903"
          avatar={imageChat}
        />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
