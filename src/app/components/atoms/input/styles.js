import styled from 'styled-components';
import PasswordChecklist from 'react-password-checklist';
import PhoneInput from 'react-phone-number-input';
import { DefaultTheme } from '../../../../theme/themes';

const widthCalc = (textWidth) => {
  const totalWidth = textWidth + 75;
  return textWidth ? totalWidth : 300;
};

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.nero};
  font-family: Poppins-Regular;
  font-size: 18px;
`;

Label.defaultProps = {
  theme: DefaultTheme
};

export const Field = styled.input`
  border: ${({ theme }) => theme.colors.green} 2px solid;
  height: 50px;
  font-size: 20px;
  background-color: transparent;
  padding-left: 10px;
  font-family: Acumin-RPro;
  color: ${({ theme }) => theme.colors.nero};
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.colors.green} 2px solid;
  }
  focus {
    font-family: Acumin-RPro;
    color: ${({ theme }) => theme.colors.nero};
  }
  border-radius: 25px;
`;
Field.defaultProps = {
  theme: DefaultTheme
};

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ customWidth }) => (customWidth ? customWidth : '280')}px;
  margin-top: 20px;
  border-radius: 20px;
`;

InputContent.defaultProps = {
  theme: DefaultTheme
};
export const FieldBlank = styled.input`
  height: 40px;
  font-size: 14.5px;
  width: fit-content;
  background-color: transparent;
  padding-left: 15px;
  width: ${({ valueWidth }) => valueWidth + 35}px !important;
  font-family: Acumin-RPro;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  border: 0;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.nero};
  :not(textarea) {
    line-height: 0;
    border: 0;
  }
  focus {
    font-family: Acumin-RPro;
    color: ${({ theme }) => theme.colors.nero};
    border: 0;
  }
`;
FieldBlank.defaultProps = {
  theme: DefaultTheme
};

export const InputContentIcon = styled.div`
  width: ${({ valueWidth }) => widthCalc(valueWidth)}px;
  border-radius: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => theme.colors.green} 2px solid;
  :not(textarea) {
    line-height: 1;
    border: ${({ theme }) => theme.colors.green} 2px solid;
  }
  focus {
    font-family: Acumin-RPro;
    color: ${({ theme }) => theme.colors.nero};
  }
`;
InputContentIcon.defaultProps = {
  theme: DefaultTheme
};

export const IconContainer = styled.div`
  padding-top: 8px;
  padding-left: 3px;
  padding-right: 3px;
`;

export const PasswordChecklistStyled = styled(PasswordChecklist)`
  color: ${({ theme }) => theme.colors.nero};
  font-family: Acumin-RPro;
  font-size: 14px;
  position: relative;
  z-index: 0;
  margin-top: 10px;
  & > * {
    position: relative;
    z-index: -10;
  }
`;

PasswordChecklistStyled.defaultProps = {
  theme: DefaultTheme
};

export const Phone = styled(PhoneInput)`
  border: ${({ theme }) => theme.colors.green} 2px solid;
  font-size: 14.5px;
  width: ${({ customWidth }) => (customWidth ? customWidth : '280')}px;
  height: 44px;
  padding-left: 12px;
  border-radius: 25px;
  & > input {
    border: transparent 0 solid;
    background-color: transparent;
  }
`;

Phone.defaultProps = {
  theme: DefaultTheme
};

export const InputSearchContainer = styled.div`
  ${InputContentIcon}
  margin: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  margin-top: -3px;
  height: 35px;
  display: flex;
  padding-right: 10px;
  flex-direction: row;
  & > ${FieldBlank} {
    margin: 0;
    border-radius: 25px;
    height: 35px;
  }
  & > svg {
    margin-top: 4px;
  }
`;
InputSearchContainer.defaultProps = {
  theme: DefaultTheme
};
