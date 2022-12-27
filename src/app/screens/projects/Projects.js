import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { fetchAllInitiatives } from "../../../redux/actions/initiatives";
import Card from "../../components/cards/Card";
import Header from "../../components/header";
import { Row } from "react-bootstrap";
import { Title } from "../../components/foundation/Typography";
import { CardsContainer, ColProject, Container, Root } from "./styles";
import { mapCards } from "../../../utils/mappers";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { useNavigate } from "react-router-dom";

const ProjectsMain = (props) => {
  const { theme, mode, themeToggler, allInitiatives } = props;
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate("/initiative", {
      state: {
        id: id,
      },
    });
  };

  const renderCards = (item) => (
    <ColProject key={item.title} width={width} lg={12} xl={6} m={7}>
      <Card
        theme={theme}
        key={item.title}
        title={item.title}
        location="CDMX, Mex"
        description={item.description}
        time={item.daysLeft}
        objective={item.objective}
        profit={item.profit}
        img={item.img}
        achieved={item.achieved}
        btnClick={() => handleNavigation(item.title)}
      />
    </ColProject>
  );

  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);
  const data = allInitiatives && mapCards(allInitiatives.data, i18n.language);
  return (
    <Root theme={theme}>
      <Header
        mode={mode}
        themeToggler={themeToggler}
        theme={theme}
        btnsArray={["lang", "mode", "logout", "projects", "profile"]}
      />
      <Container>
        <Title theme={theme}>{t("projectsTitle")}</Title>
        <CardsContainer>
          <Row>{data && data.map((value) => renderCards(value))}</Row>
        </CardsContainer>
      </Container>
    </Root>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives } = state.initiativesReducer;
  return {
    allInitiatives: allInitiatives,
  };
};

export default connect(mapToStateProps, null)(ProjectsMain);
