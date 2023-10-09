import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { ChoosedDayDivStyled } from 'components/ChoosedDay/ChoosedDayStyled.styled';

export const ChoosedDay = () => {
  return (
    <>
      <h1>ChoosedDay містить в собі:</h1>
      <DayCalendarHead />
      <ChoosedDayDivStyled>
        <ColumnTasksList />
      </ChoosedDayDivStyled>
    </>
  );
};
