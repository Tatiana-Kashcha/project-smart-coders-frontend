import styled from 'styled-components';
// import { globalTheme } from 'theme';

export const ColumnHB = styled.div`
  width: 301px;
  display: flex;
  gap: 223;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 18px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeadBarTitle = styled.h2`
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const HeadBarBtn = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.primaryText};
`;
