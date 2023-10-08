import styled from 'styled-components';

import { globalTheme } from 'theme';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonMonth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  border-radius: 8px 0px 0px 8px;
  border: none;

  color: ${props =>
    props.disabled
      ? props.theme.colors.periodTypeBtnActiveContent
      : props.theme.colors.disabledBatton};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.periodTypeBtnActive
      : props.theme.colors.periodTypeBtnNotActive};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const ButtonDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 26px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  border-radius: 0px 8px 8px 0px;
  border: none;

  color: ${props =>
    props.disabled
      ? props.theme.colors.periodTypeBtnActiveContent
      : props.theme.colors.disabledBatton};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.periodTypeBtnActive
      : props.theme.colors.periodTypeBtnNotActive};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;
