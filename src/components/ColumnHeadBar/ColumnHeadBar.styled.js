import styled from 'styled-components';
import { globalTheme } from 'theme';

import { ReactComponent as PlusBtn } from '../../icons/plus-circle.svg';

export const ColumnHB = styled.div`
  width: 100%;

  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.secondBackground};
`;

export const HeadBarTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  @media (min-width: ${globalTheme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const HeadBarBtn = styled(PlusBtn)`
  width: 22px;
  height: 22px;
  cursor: pointer;

  @media (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
