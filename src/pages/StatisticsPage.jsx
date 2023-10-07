// import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator'; //?

import { useThemeContext } from 'hooks';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import * as s from '../components/StatisticsChart/StatisticsChart.styled';

export default function StatisticsPage() {
  const { theme } = useThemeContext();

  return (
    <s.StatWrapper>
      {/* <PeriodPaginator /> */}
      <div
        style={{
          width: '307px',
          height: '30px',
          color: '#FFF',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '18px',
          textTransform: 'uppercase',
          backgroundColor: 'blueviolet',
        }}
      >
        PeriodPaginator TODO://!BAG-FIX
      </div>
      <StatisticsChart theme={theme}/>
    </s.StatWrapper>
  );
}
