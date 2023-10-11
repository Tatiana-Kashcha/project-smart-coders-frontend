import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivTaskLeg = styled.div`
  border-radius: 8px;
  padding-left: 8px;
`;

export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  max-width: 767px;
  max-height: 625px;
  margin: 0 auto;
  height: 470px;
  border: ${props => props.theme.colors.userInputBorder};
  color: ${props => props.theme.colors.calendarText};
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: calc(100vh - 280px);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1087px;
    height: calc(100vh - 270px);
  }

  transition-duration: 100ms;
  transition-timing-function: linear;
  :focus,
  :hover {
    z-index: 1;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
  }
  :active > ul {
    opacity: 1;
    visibility: visible;
  }
`;

export const RowInCell = styled.div`
  display: flex;
`;

export const CellWrapper = styled.div`
  display: flex;
  margin-bottom: 0px;
  padding: 8px 4px;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.bgrCalendar};
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`;

export const DayWrapper = styled.div`
  width: 24px;
  height: 26px;
  align-items: center;
  border-radius: solid 1px #111111;
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  border-radius: 50%;
  position: relative;

  color: ${props => props.theme.colors.primaryText};
  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 16px;
    line-height: 1.12;
    margin-right: 10px;
  }
  animation: scaleAnimation 1s linear infinite alternate;
`;
export const CurrentDay = styled.span`
  border: 1px solid #111111;
  display: flex;
  display: inline-flex;
  padding: 4px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: #3e85f3;
  color: #fff;
`;

export const Day = styled.span`
  width: 100%;
  height: 100%;
  border: 1px solid #111111;
  display: flex;
  color: ${props => props.theme.colors.white};

  align-items: center;
  justify-content: center;
  padding: 4px 8px;

  background: ${props => props.theme.colors.primaryText};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 14px;
    line-height: 1.28;
  }
`;

export const DivSelectLow = styled.div`
  color: ${globalTheme.colors.primary};
  border-radius: 8px;
  position: absolute;
  top: 20%;
  height: 20px;
  right: 120%;
  background-color: ${globalTheme.colors.lowTasksBg};
`;

export const SelectLow = styled.ul`
  opacity: 0;
  visibility: hidden;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -80%);
  border-radius: 15%;
  background-color: ${globalTheme.colors.lowTasksBg};
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  transition: all 0.5s ease;
`;

export const OptionSelectLow = styled.li`
  color: ${props => {
    switch (props.priority) {
      case 'medium':
        return globalTheme.colors.mainYellow;
      case 'low':
        return globalTheme.colors.primary;
      case 'high':
        return globalTheme.colors.mainRed;
      default:
        return globalTheme.colors.primary;
    }
  }};
  background: ${props => {
    switch (props.priority) {
      case 'medium':
        return globalTheme.colors.lightYellow;
      case 'low':
        return globalTheme.colors.lowTasksBg;
      case 'high':
        return globalTheme.colors.lightRed;
      default:
        return globalTheme.colors.lowTasksBg;
    }
  }};
  padding-left: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 94px;
  height: 26px;
  border-radius: 8px;
`;

export const DivSelectMedium = styled.div`
  color: ${globalTheme.colors.mainYellow};
  position: absolute;
  top: 100%;
  right: 120%;
  height: 20px;
  background-color: ${globalTheme.colors.lightYellow};
  border-radius: 8px;
`;

export const DivSelectHigh = styled.div`
  color: ${globalTheme.colors.mainRed};
  position: absolute;
  top: 180%;
  right: 120%;
  height: 20px;
  background-color: ${globalTheme.colors.lightRed};
  border-radius: 8px;
`;
