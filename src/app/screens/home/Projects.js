import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllInitiatives } from "../../../redux/actions/initiatives";
import { mapCards } from "../../../utils/mappers";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import Card from "../../components/cards/Card";
import { Title } from "../../components/foundation/Typography";
import { ColProject, ContainerProjects, CardsContainer } from "./styles";

const Projects = (props) => {
  const { theme, projectRef, allInitiatives } = props;
  const { t } = useTranslation()
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noOfCards = width < 1240 ? 2 : 4;
  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);
  const data = allInitiatives && mapCards(allInitiatives.data);

  const renderCards = (item) => (
    <ColProject key={item.title} responsiveWidth={width} lg={12} xl={6} m={7}>
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
        btnClick={() => navigate("/register")}
      />
    </ColProject>
  );

  return (
    <ContainerProjects ref={projectRef} theme={theme}>
      <Title theme={theme}>{t('projectsTitle')}</Title>
      <CardsContainer>
      <Row>{data && data.slice(0, noOfCards).map((value) => renderCards(value))}</Row>
      </CardsContainer>
      <SecondaryBtn
        label={t('seeAll')}
        fontSize={30}
        theme={theme}
      />
    </ContainerProjects>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives } = state.initiativesReducer;
  return {
    allInitiatives: allInitiatives,
  };
};

export default connect(mapToStateProps, null)(Projects);
