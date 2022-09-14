import React from "react";
import PrimaryBtn from "../buttons/Primary";
import SecondaryBtn from "../buttons/Secondary";
// Styled components
import { Container, ButtonContainer } from "./styles";
const Header = (props) => {
  const { btnsArray } = props;

  const btnRender = (btn) => {
    return btn.type === "secondary" ? (
      <SecondaryBtn label={btn.label} />
    ) : (
      <PrimaryBtn label={btn.label} />
    );
  };

  return (
    <Container>
      <ButtonContainer>
        {btnsArray.map((btn) => btnRender(btn))}
      </ButtonContainer>
    </Container>
  );
};

export default Header;
