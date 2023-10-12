import styled from 'styled-components';
import { globalTheme } from 'theme';

export const CalendarGridWrapperDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;

  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.colors.calendarText};

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1087px;

    transition-timing-function: linear;
    :focus,
    :hover {
      transform: scale(1.05);
      z-index: 1;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      cursor: pointer;
    }
  }
`;

export const RowInCellDay = styled.div`
  display: flex;
  .full-name {
    display: block;
  }
  .short-name {
    display: none;
  }
`;

export const CellWrapperDay = styled.div`
  display: flex;
  margin-bottom: 0px;
  padding: 0;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.bgrCalendar};
  @media screen and (min-width: 768px) {
  }
`;
//циферки
export const DayWrapperDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;

  position: relative;
  margin-left: 6px;

  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-left: 0px;
  }

  color: ${props => props.theme.colors.primaryText};
  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 16px;
    line-height: 1.12;
  }
`;
export const CurrentDay = styled.span`
  border: 1px solid #111111;
  display: flex;
  display: inline-flex;
  padding: 4px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

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

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 14px;
    line-height: 1.28;
  }
`;

export const DivSelectLow = styled.div`
  position: absolute;
  top: 20%;
  right: 120%;
`;

export const SelectLow = styled.select`
  background-color: ${globalTheme.colors.lowTasksBg};
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
`;

export const OptionSelectLow = styled.option`
  color: ${globalTheme.colors.primary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 94px;
  height: 26px;
`;

export const DivSelectMedium = styled.div`
  position: absolute;
  top: 100%;
  right: 120%;
`;

export const SelectMedium = styled.select`
  background-color: ${globalTheme.colors.lightYellow};
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const OptionSelectMedium = styled.option`
  color: ${globalTheme.colors.mainYellow};
`;

export const DivSelectHigh = styled.div`
  position: absolute;
  top: 180%;
  right: 120%;
`;

export const SelectHigh = styled.select`
  background-color: ${globalTheme.colors.lightRed};
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const OptionSelectHigh = styled.option`
  color: ${globalTheme.colors.mainRed};
`;

export const HiddenTaskCount = styled.span`
  color: green;
  position: absolute;
  left: 2px;
  top: 15px;
  font-style: italic;
  font-size: 10px;
  line-height: 1.4;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 768px) {
    left: 2px;
    top: 20px;

    font-size: 14px;
    line-height: 1.29;
  }

  @media (min-width: 1440px) {
    left: 4px;
    top: 25px;
  }

  .full-name {
    display: block;
  }
`;

export const CurrDay = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 27px;
  height: 26px;
  padding: 5px;
  background: rgb(62, 133, 243);
  border-radius: 6px;
  color: rgb(255, 255, 255);
`;

export const StyledDayItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.isSelected ? 'rgb(62, 133, 243)' : 'inherit')};
  border-radius: ${props => (props.isSelected ? '6px' : '0')};
  color: ${props => (props.isSelected ? '#fff' : 'inherit')};
  font-family: ${props => (props.isSelected ? 'Inter' : 'inherit')};
  font-weight: ${props => (props.isSelected ? '600' : 'inherit')};
  font-size: ${props => (props.isSelected ? '16px' : 'inherit')};
  line-height: ${props => (props.isSelected ? '18px' : 'inherit')};
  cursor: ${props => (props.isSelected ? 'pointer' : 'default')};
`;
