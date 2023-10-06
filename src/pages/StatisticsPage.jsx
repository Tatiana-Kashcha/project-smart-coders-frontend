import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import * as s from '../components/StatisticsChart/StatisticsChart.styled';

export default function StatisticsPage() {
  return (
    <s.SatatWrapper>
      <PeriodPaginator />
      <StatisticsChart />
    </s.SatatWrapper>
  );
}
