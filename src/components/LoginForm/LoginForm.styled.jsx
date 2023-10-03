import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Form = styled.form`
  width: 335px;
  height: 100%;
  z-index: 2;

  background-color: ${globalTheme.colors.background};
  border-radius: 8px;
  padding: 40px 24px;
  margin-bottom: 8px;

  @media screen and (max-width: 374px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 100%;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  color: ${globalTheme.colors.primary};
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;

  color: ${globalTheme.colors.black};
  margin-top: 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
  }
`;

export const Input = styled.input`
  font-weight: 400;
  width: 100%;
  display: block;
  outline: none;
  padding: 14px;
  border: ${globalTheme.colors.borderColor};
  border-radius: 8px;
  position: relative;

  &:hover,
  &:focus {
    border-color: ${globalTheme.colors.primary};
  }

  ::placeholder {
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    color: rgba(17, 17, 17, 0.15);
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 10;
  width: 250px;
  font-size: 10px;
  color: ${globalTheme.colors.redError};

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background: ${globalTheme.colors.primary};
  box-shadow: ${globalTheme.shadow.boxShadow};
  border-radius: 16px;
  color: ${globalTheme.colors.white};

  padding: 14px;
  margin-top: 32px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    margin-top: 48px;
    font-size: 18px;
    padding: 16px;
  }
`;

export const Password = styled.div`
  position: relative;
`;

export const ToggleShowHide = styled.span`
  position: absolute;
  width: 30px;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
