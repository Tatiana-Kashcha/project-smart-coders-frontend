import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as Trash } from '../../icons/trash-box.svg';

export const Toolbar = styled.div`
  width: 68px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrowCircleBtn = styled(ArrowCircle)`
  color: ${props => props.theme.colors.primaryText};
  border: none;
  padding: 0;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const PencilBtn = styled(Pencil)`
  color: ${props => props.theme.colors.primaryText};
  border: none;
  padding: 0;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const TrashBtn = styled(Trash)`
  color: ${props => props.theme.colors.primaryText};
  border: none;
  padding: 0;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const ToolMenu = styled.div`
  width: 115px;
  height: 70px;
  padding: 14px;

  border-radius: 8px;
  background: ${props => props.theme.colors.secondBackground};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ToolMenuIcon = styled(ArrowCircle)`
  color: ${props => props.theme.colors.primaryText};

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;

export const ToolMenuBtn = styled.button`
  height: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.primaryText};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${globalTheme.colors.primary};
  }
`;
