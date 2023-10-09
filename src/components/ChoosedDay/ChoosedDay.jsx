import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { ChoosedDayDivStyled } from 'components/ChoosedDay/ChoosedDayStyled.styled';

export const ChoosedDay = () => {
  return (
    <>
      <DayCalendarHead />
      <ChoosedDayDivStyled>
        <ColumnTasksList />
      </ChoosedDayDivStyled>
    </>
  );
};
