import styled from "styled-components";
import PasswordChecklist from "react-password-checklist";
import PhoneInput from "react-phone-number-input";

const widthCalc = (textWidth) => {
  const totalWidth = textWidth + 75;
  return textWidth ? totalWidth : 300;
};

export const Label = styled.label`
  color: ${({ theme }) => theme.fonts};
  font-family: AcuminBdPro;
  font-size: 18px;
`;

export const Field = styled.input`
  border: ${({ theme }) => theme.green} 2px solid;
  height: 50px;
  font-size: 20px;
  background-color: transparent;
  font-family:Acumin-RPro;
  color: ${({ theme }) => theme.fonts};
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.green} 2px solid;
  }
  focus {
    font-family:Acumin-RPro;
    color: ${({ theme }) => theme.fonts};
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ customWidth }) => (customWidth ? customWidth : "280")}px;
  margin-top: 20px;
`;
export const FieldBlank = styled.input`
  height: 40px;
  font-size: 14.5px;
  width: fit-content;
  background-color: transparent;
  padding-left: 10px;
  width: ${({ valueWidth }) => valueWidth + 35}px !important;
  font-family:Acumin-RPro;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  border: 0;
  color: ${({ theme }) => theme.fonts};
  :not(textarea) {
    line-height: 0;
    border: 0;
  }
  focus {
    font-family:Acumin-RPro;
    color: ${({ theme }) => theme.fonts};
    border: 0;
  }
`;

export const InputContentIcon = styled.div`
  width: ${({ valueWidth }) => widthCalc(valueWidth)}px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => theme.green} 2px solid;
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.green} 2px solid;
  }
  focus {
    font-family:Acumin-RPro;
    color: ${({ theme }) => theme.fonts};
  }
`;

export const IconContainer = styled.div`
  padding-top: 8px;
  padding-left: 3px;
  padding-right: 3px;
`;

export const PasswordChecklistStyled = styled(PasswordChecklist)`
  color: ${({ theme }) => theme.fonts};
  font-family:Acumin-RPro;
  font-size: 14px;
  position: relative;
  z-index: 0;
  margin-top: 10px;
  & > * {
    position: relative;
    z-index: -10;
  }
`;

export const Phone = styled(PhoneInput)`
  border: ${({ theme }) => theme.green} 2px solid;
  font-size: 14.5px;
  width: ${({ customWidth }) => (customWidth ? customWidth : "280")}px;
  height: 40px;
  padding-left: 10px;
  & > input {
    border: transparent 0 solid;
    background-color: transparent;
  }
`;
