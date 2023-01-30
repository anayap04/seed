import React, { useRef } from "react";
import Header from "../../components/header";
import Main from "./Main";
import About from "./About";
import HowTo from "./HowTo";
import Projects from "./Projects";
import { connect } from "react-redux";
import { loginSuccessed } from "../../../redux/actions/login";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = (props) => {
  const { theme, themeToggler, mode, userData } = props;
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const projectRef = useRef(null);
  const btnsArray = ["lang", "mode"];
  const cachedUser = localStorage.getItem("userId");
  if (cachedUser || userData) {
    btnsArray.push(...["profile", "logout"]);
  } else {
    btnsArray.push(...["reg", "login"]);
  }

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="App">
      <Header
        theme={theme}
        mode={mode}
        themeToggler={themeToggler}
        btnsArray={btnsArray}
      />

      <Main
        theme={theme}
        scrollToView={scrollToView}
        refs={{ homeRef, aboutRef, howRef, projectRef }}
      />
      <AnimationOnScroll animateIn="animate__fadeIn">
        <About mode={mode} theme={theme} aboutRef={aboutRef} />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <HowTo
          userData={cachedUser || userData}
          theme={theme}
          howRef={howRef}
        />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Projects theme={theme} projectRef={projectRef} />
      </AnimationOnScroll>
    </div>
  );
};
const mapToStateProps = (state) => {
  const { userData } = state.loginReducer;
  return {
    userData: userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loginSuccessed),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(Home);
