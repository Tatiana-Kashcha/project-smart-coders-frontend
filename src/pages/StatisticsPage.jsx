import { useThemeContext } from 'hooks';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import * as s from '../components/StatisticsChart/StatisticsChart.styled';
import { useState } from 'react';

export default function StatisticsPage() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const { theme } = useThemeContext();

  const upDateDate = PlusOrMinus => {
    const newDateDay = new Date(date);
    newDateDay.setDate(newDateDay.getDate() + PlusOrMinus);
    setDate(newDateDay);
  };

  return (
    <s.StatWrapper>
      <PeriodPaginator date={date} upDateDate={upDateDate} />
      <StatisticsChart date={date} theme={theme} />
    </s.StatWrapper>
  );
}
