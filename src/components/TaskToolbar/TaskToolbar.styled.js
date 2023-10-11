import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as Trash } from '../../icons/trash-box.svg';

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  width: 62px;
  gap: 10px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 68px;
  }
`;

export const ArrowCircleBtn = styled(ArrowCircle)`
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const PencilBtn = styled(Pencil)`
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const TrashBtn = styled(Trash)`
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const ToolMenu = styled.div`
  position: absolute;
  z-index: 999;
  transform: translate(205px, 80px);

  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 115px;
  padding: 13px;

  border: ${props => props.theme.colors.userInputBorder};
  border-radius: 7px;
  background-color: ${props => props.theme.colors.modalWindow};

  box-shadow: ${globalTheme.shadow.toolMenuShadow};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    transform: translate(210px, 95px);

    width: 147px;
    padding: 19px 23px;
  }
`;

export const ToolMenuBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  font-size: 12px;
  font-weight: 500;
  line-height: calc(14 / 12);

  color: ${props => props.theme.colors.primaryText};

  &:hover {
    color: ${globalTheme.colors.primary};

    @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
      font-size: 14px;
      line-height: calc(18 / 14);
    }
  }
`;
