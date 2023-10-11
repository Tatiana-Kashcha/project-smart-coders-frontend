// export const MonthCalendarHead = () => {
//   return <h1>MonthCalendarHead - дні тижня без дат</h1>;
// };

import { StyleSheetManager } from 'styled-components';
import { StyledItem, StyledHead } from './MonthCalendarHead.styled';

const MonthCalendarHead = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <StyleSheetManager
      shouldForwardProp={prop => prop !== 'calendarorstatistic'}
    >
      <StyledHead>
        {daysOfWeek.map(day => (
          <StyledItem item={day.toUpperCase()} key={day}>
            <span className="full-name">{day.toUpperCase()}</span>
            <span className="short-name">{day.toUpperCase().slice(0, 1)}</span>
          </StyledItem>
        ))}
      </StyledHead>
    </StyleSheetManager>
  );
};

export default MonthCalendarHead;
