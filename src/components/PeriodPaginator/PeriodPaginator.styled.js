import styled from 'styled-components';

import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TestStyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChevronLeftMod = styled(ChevronLeft)`
  width: 16px;
  height: 16px;
`;

export const ChevronRightMod = styled(ChevronRight)`
  width: 16px;
  height: 16px;
`;
