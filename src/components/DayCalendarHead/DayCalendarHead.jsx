import { StyledItem, StyledHead, ContainerDay } from './DayCalendarHead.styled';
import CalendarTableDay from 'components/CalendarTableDay/CalendarTableDay';

const DayCalendarHead = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <ContainerDay>
      <StyledHead>
        {daysOfWeek.map(day => (
          <StyledItem item={day.toUpperCase()} key={day}>
            <span className="full-name">{day.toUpperCase()}</span>
            <span className="short-name">{day.toUpperCase().slice(0, 1)}</span>
          </StyledItem>
        ))}
      </StyledHead>
      <CalendarTableDay />
    </ContainerDay>
  );
};

export default DayCalendarHead;
