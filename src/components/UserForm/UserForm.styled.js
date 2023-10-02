import styled from 'styled-components';
import { ReactComponent as User } from '../../icons/user.svg';
import { ReactComponent as PlusBlue } from '../../icons/plusBlue.svg';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { globalTheme } from 'theme';

export const DatePickerStyled = styled(DatePicker)`
  input {
    padding-left: 0px;
    color: ${globalTheme.colors.primaryText};
  }
  input::placeholder {
    font-family: 'Inter';
    font-size: 14px;
    color: ${globalTheme.colors.userPlaceholder};
    font-weight: 600;
    opacity: 1;
  }

  /* Input value */
  .MuiInputBase-root {
    position: relative;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
  }
  .MuiButtonBase-root {
    color: ${globalTheme.colors.buttonCalendar};
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(17, 17, 17, 0.1);
  }

  .MuiOutlinedInput-root {
    min-width: 250px;
    height: 44px;
    padding-left: 14px;
    padding-right: 14px;
    outline: none;
    border: none;
    border-radius: 8px;

    .MuiOutlinedInput-notchedOutline {
      border: ${globalTheme.colors.userInputBorder};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid rgba(17, 17, 17, 0.1);
    }
  }
`;

export const Container = styled.div`
  max-width: 375px;
  padding-bottom: 40px;

  background-color: ${globalTheme.colors.background};

  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 768px;
    padding-bottom: 38px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
    padding-bottom: 32px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${globalTheme.colors.secondBackground};
  border-radius: 16px;

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .InvalidInput {
    border: 1px solid #da1414;
  }
  .ErrorMsg {
    color: green;
  }
`;

export const StyledAvatar = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: white;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const AvatarDefault = styled(User)`
  position: absolute;
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;
  @media (min-width: 768px) {
    left: calc(50% - 47px);
    top: 45px;
    width: 95px;
    height: 95px;
  }
  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;

export const Plus = styled(PlusBlue)`
  position: absolute;
  left: 53%;
  top: 28px;
  width: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;

export const Heading = styled.div`
  margin-top: 14px;
  font-family: 'Inter';
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  color: ${globalTheme.colors.primaryText};
  text-align: center;
`;

export const Title = styled.div`
  margin-top: 4px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: '12px';
  color: userLabelColor;
  text-align: center;
`;

// Обгортка Inputs without avatar
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    width: 758px;
    flex-direction: initial;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 24px;
  }
`;

// Обгортка Label та Input
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 354px;
  }
  @media (min-width: 1440px) {
    width: 354px;
  }
`;

export const Label = styled.label`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 1.1;
  color: ${globalTheme.colors.userLabelColor};
`;

export const Input = styled.input`
  min-width: 250px;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  outline: none;
  border: 1px solid rgba(17, 17, 17, 0.1);
  /* border: ${globalTheme.colors.userInputBorder}; */
  border-radius: 8px;

  ${globalTheme.value &&
  `
    font-family: 'Inter';
    font-size: 14px;
    font-weight:600;
    color: black;
  `}
  color: ${globalTheme.colors.primaryText};
  background-color: transparent;
  border: ${globalTheme.colors.userFormBorderInput};
  &::placeholder {
    font-family: 'Inter';
    font-size: 14px;
    color: ${globalTheme.colors.userPlaceholder};
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(17, 17, 17, 0.1);
  }
  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const ErrorMessage = styled.div`
  color: #da1414;
  font-size: 12px;
  margin-top: 3px;
  margin-left: 8px;
  @media (min-width: 768px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 50px;
  padding-right: 50px;
  width: 195px;
  height: 46px;
  font-family: 'Inter';
  font-weight: 600;
  line-height: 1.25;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  background-color: ${globalTheme.disabled ? '#FFFFFF' : '#3E85F3'};
  border-radius: 16px;

  border: 0;
  cursor: ${globalTheme.disabled ? 'default' : 'pointer'};
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;
