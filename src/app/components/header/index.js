import React from "react";
import PrimaryBtn from "../buttons/Primary";
import SecondaryBtn from "../buttons/Secondary";
// Styled components
import { Container, ButtonContainer } from "./styles";
const Header = (props) => {
  const { btnsArray, theme } = props;

  const btnRender = (btn) => {
    return btn.type === "secondary" ? (
      <SecondaryBtn
        theme={theme}
        key={btn.id}
        label={btn.label}
        onClick={btn.onClick}
      />
    ) : (
      <PrimaryBtn
        theme={theme}
        key={btn.id}
        label={btn.label}
        onClick={btn.onClick}
      />
    );
  };

  return (
    <Container theme={theme}>
      <ButtonContainer>
        {btnsArray.map((btn) => btnRender(btn))}
      </ButtonContainer>
    </Container>
  );
};

export default Header;
