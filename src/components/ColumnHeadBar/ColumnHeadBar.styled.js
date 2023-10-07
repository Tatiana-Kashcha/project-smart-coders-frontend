import styled from 'styled-components';
import { ReactComponent as PlusBtn } from '../../icons/plus-circle.svg';

export const ColumnHB = styled.div`
  width: 100%;
  padding: 7px 0 7px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secondBackground};
`;

export const HeadBarTitle = styled.h2`
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`;

export const HeadBarBtn = styled(PlusBtn)`
  width: 22px;
  height: 22px;
  color: ${props => props.theme.colors.primaryText};
`;
