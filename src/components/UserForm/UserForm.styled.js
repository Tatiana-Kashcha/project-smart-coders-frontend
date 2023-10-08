// import styled from 'styled-components';
import { ReactComponent as User } from '../../icons/user.svg';
// import { ReactComponent as PlusBlue } from '../../icons/plusBlue.svg';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { globalTheme } from 'theme';
import { ReactComponent as IconCorrect } from '../../icons/done.svg';
import { ReactComponent as IconError } from '../../icons/ic_baseline-error-outline.svg';

// коментар
import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikFieldAdd,
  Field as Input,
} from 'formik';

import { ReactComponent as plus } from '../../icons/plusBlue.svg';

export const WrapperForm = styled.div`
  margin: 0 auto;
  max-width: 100%;

  position: relative;

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .desktop} - 0.5px)) {
    padding-top: 31px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    max-width: 335px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    min-width: 100%;
  }
`;

export const Form = styled(FormikForm)`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${props => props.theme.colors.secondBackground};
  border-radius: 16px;
  /* border-color: rgba(17, 17, 17, 0.15); */
  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FieldAdd = styled(FormikFieldAdd)`
  display: none;
`;

export const AvatarDefault = styled(User)`
  position: absolute;
  left: calc(50% - 25px);
  top: 5px;
  width: 50px;
  height: 50px;
  //   /* fill: '#3E85F3'; */
  @media (min-width: 768px) {
    left: calc(50% - 25px);
    top: 74px;
    width: 48px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    left: calc(50% - 47px);
    top: 65px;
    width: 95px;
    height: 95px;
  }
`;
// огортка user
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`;
// огортка label
export const Labels = styled.label`
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  border-color: rgba(17, 17, 17, 0.15);
  row-gap: 8px;
  max-width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.userLabelColor}; //колір назв інпутів

  @media screen and (min-width: 375px) and (max-width: 768px) {
    min-width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    font-size: 14px;
    line-height: 1.3;
  }
`;
//Input
export const InputInfo = styled(Input)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  height: 42px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.textareaBorder};
  border-color: ${props => props.theme.colors.userLabelColor};
  background-color: transparent;
  padding: 12px 14px;
  color: ${props => props.theme.colors.primaryText};
  /* transition: ${props => props.theme.colors.defaultTransition}; */
  display: flex;

  &::placeholder {
    color: ${props => props.theme.colors};
  }
  :hover,
  :focus {
    border-color: ${props => props.theme.colors.userInputBorder};
    border: 1px solid;
  }
  /* border: 1px solid ${props => props.theme.colors.textareaBorder}; */

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    padding: 14px 18px;
    height: 46px;
  }
`;
//іконки  input
export const IconStatusBox = styled.div`
  position: relative;
  height: 46px;
  display: flex;
  @media (min-width: 768px) {
    height: 46px;
  }
`;
// огортка аватара
export const AvatarWrapper = styled.div`
  margin-bottom: 14px;
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -31px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: ${props => props.theme.colors.bgrAvatar};
  border: 2px solid #3e85f3;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const ImgAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-color: rgba(17, 17, 17, 0.15);
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const ControlBtn = styled.button`
  align-items: center;
  min-width: 195px;
  height: 46px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background-color: ${globalTheme.colors.primary};
  color: ${globalTheme.colors.white};
  transition: ${globalTheme.colors.defaultTransition};
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${globalTheme.colors.secondary};
  }
  &:disabled {
    opacity: 0.45;
  }
  @media screen and (max-width: 240px) {
    min-width: 100px;
    font-size: 10px;
  }
  @media (min-width: 768px) {
    min-width: 262px;
    height: 48px;
  }
`;

export const AddIcon = styled(plus)`
  position: absolute;
  left: 53%;
  top: 25px;
  width: 14px;
  height: 14px;
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
export const ErrorIcon = styled(IconError)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CorrectIcon = styled(IconCorrect)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
export const UserTitle = styled.h2`
  color: ${props => props.theme.colors.thirdText};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.colors.userLabelColor};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
