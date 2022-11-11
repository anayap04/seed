import styled from "styled-components";

const widthCalc = textWidth => {
  const totalWidth = textWidth + 75;
  return textWidth ? totalWidth : 300;
}

export const Label = styled.label`
  color: ${({ theme }) => theme.fonts};
  font-family: Bitter-SemiBold;
  font-size: 18px;
`;

export const Field = styled.input`
  border: ${({ theme }) => theme.primaryColor} 2px solid;
  height: 50px;
  font-size: 20px;
  background-color: transparent;
  font-family: Montserrat-Regular;
  color: ${({ theme }) => theme.fonts};
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.primaryColor} 2px solid;
  }
  focus {
    font-family: Montserrat-Regular;
    color: ${({ theme }) => theme.fonts};
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({customWidth}) => customWidth ? customWidth : '280'}px;
  margin-top: 30px;
`;
export const FieldBlank = styled.input`
  height: 40px;
  font-size: 14.5px;
  width: fit-content;
  background-color: transparent;
  padding-left: 10px;
  width: ${({valueWidth}) => valueWidth + 35}px !important;
  font-family: Montserrat-Regular;
  opacity: ${({disabled}) => disabled ? 0.3 : 1};
  border: 0;
  color: ${({ theme }) => theme.fonts};
  :not(textarea) {
    line-height: 0;
    border: 0;
  }
  focus {
    font-family: Montserrat-Regular;
    color: ${({ theme }) => theme.fonts};
    border: 0;
  }
`;

export const InputContentIcon = styled.div`
  width: ${({valueWidth}) => widthCalc(valueWidth)}px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => theme.primaryColor} 2px solid;
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.primaryColor} 2px solid;
  }
  focus {
    font-family: Montserrat-Regular;
    color: ${({ theme }) => theme.fonts};
  }
`;

export const IconContainer = styled.div`
  padding-top: 8px;
  padding-left: 5px;
`;
