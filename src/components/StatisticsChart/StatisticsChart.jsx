import * as s from './StatisticsChart.styled';

export default function StatisticsChart() {
  return (
    <>
      <s.Legend>
        <s.DayLegend>By Day</s.DayLegend>
        <s.MonthLegend>By Month</s.MonthLegend>
      </s.Legend>
      <s.DiagramWrapper>Ш</s.DiagramWrapper>
    </>
  );
}
