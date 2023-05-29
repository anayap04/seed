import React, { useEffect, useRef } from 'react';
import Header from '../../components/header';
import Main from './Main';
import About from './About';
import HowTo from './HowTo';
import Projects from './Projects';
import { connect } from 'react-redux';
import { loginSuccessed } from '../../../redux/actions/login';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from 'react-i18next';
import Partners from './Partners';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { userData } = props;
  const { t } = useTranslation();
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const projectRef = useRef(null);
  const faqRef = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const btnsArray = [
    {
      id: 'about',
      color: theme.colors.nero,
      label: t('about'),
      onClick: () => scrollToView(aboutRef)
    },
    {
      id: 'how',
      color: theme.colors.nero,
      label: t('howTo'),
      onClick: () => scrollToView(howRef)
    },
    {
      id: 'projects',
      color: theme.colors.nero,
      label: t('projects'),
      onClick: () => scrollToView(projectRef)
    },
    {
      id: 'faq',
      color: theme.colors.nero,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const cachedUser = localStorage.getItem('userId');

  useEffect(() => {
    const sectionRef = {
      about: aboutRef,
      how: howRef,
      projects: projectRef
    };

    if (location && location.state && location.state.section) {
      const sectionSelected = sectionRef[location.state.section];
      scrollToView(sectionSelected);
    }
  }, [aboutRef, howRef, projectRef]);

  return (
    <div className="App">
      <Header btnsArray={btnsArray} onClick={scrollToView} />

      <Main scrollToView={scrollToView} refs={{ homeRef, aboutRef, howRef, projectRef, faqRef }} />
      <AnimationOnScroll animateIn="animate__fadeIn">
        <About aboutRef={aboutRef} />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Partners />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <HowTo userData={cachedUser || userData} howRef={howRef} />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Projects projectRef={projectRef} />
      </AnimationOnScroll>
    </div>
  );
};
const mapToStateProps = (state) => {
  const { userData } = state.loginReducer;
  return {
    userData: userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loginSuccessed)
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(Home);
