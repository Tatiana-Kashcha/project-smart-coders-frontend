import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Card = styled.div`
  width: 100%;
  padding: 14px 14px 18px;

  border-radius: 8px;
  border: ${props => props.theme.colors.userInputBorder};
  background-color: ${props => props.theme.colors.bgrSection};
`;

export const CardDescr = styled.div`
  margin-bottom: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.colors.primaryText};

  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

export const CardEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  color: ${props => props.theme.colors.primaryText};
`;

export const CardAvAndPri = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  font-size: 10px;
  font-weight: 600;
  line-height: calc(12 / 10);
`;

export const Elipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${globalTheme.colors.primary};
  background-color: ${globalTheme.colors.primary};

  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryText};
`;

export const Avatar = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
`;

export const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${props => {
    switch (props.priority) {
      case 'medium':
        return `${globalTheme.colors.mainYellow}`;
      case 'low':
        return `${globalTheme.colors.mainBlue}`;
      case 'high':
        return `${globalTheme.colors.mainRed}`;
      default:
        return `${globalTheme.colors.mainBlue}`;
    }
  }};
`;
