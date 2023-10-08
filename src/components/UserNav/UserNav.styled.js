import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { globalTheme } from 'theme';

import { ReactComponent as UserCheck } from '../../icons/user-check.svg';
import { ReactComponent as CalendarCheck } from '../../icons/calendar-check.svg';
import { ReactComponent as Stat } from '../../icons/stat.svg';

export const List = styled.ul`
  margin-bottom: 424px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: ${props => props.theme.colors.sideBarContent};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-bottom: 563px;
    gap: 16px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin-bottom: 439px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 12px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: normal;

  transition: all 250ms ${globalTheme.cubic.cubicBezier};

  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.colors.colorButtonContentHover};
    background-color: ${props => props.theme.colors.sideBarActive};
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    gap: 10px;
    padding: 16px 20px;

    font-size: 16px;
  }
`;

export const IconWrap = styled.span`
  display: flex;
  justify-content: center;
`;

export const IconUserCheck = styled(UserCheck)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const IconCalendarCheck = styled(CalendarCheck)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const IconStat = styled(Stat)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
