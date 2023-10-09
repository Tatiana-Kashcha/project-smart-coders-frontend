import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { selectTasks } from '../../redux/tasks/selectors';
import * as s from './StatisticsChart.styled';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const getChartOptions = props => ({
  responsive: true,
  layout: {
    padding: 40,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        color: 'transparent',
      },
      ticks: {
        font: {
          family: 'Inter',
          size: 14,
          weight: 400,
          lineHeight: 1.5,
        },
        color: props.theme.colors.thirdText,
      },
    },
    y: {
      border: {
        color: 'transparent',
      },
      grid: {
        display: true,
        color: 'rgba(227, 243, 255, 1)',
      },
      ticks: {
        stepSize: 20,
        color: props.theme.colors.thirdText,
        font: {
          family: 'Inter',
          size: 11,
          weight: 500,
          lineHeight: 1.5,
        },
        maxTicksLimit: 100,
      },
    },
  },
  plugins: {
    datalabels: {
      display: true,
      color: props.theme.colors.thirdText,
      font: {
        family: 'Inter',
        size: 11,
        weight: 500,
        lineHeight: 1.5,
      },
      formatter: function (value, data) {
        const total = data.dataset.data.reduce((previousValue, number) => {
          return previousValue + number;
        });

        if (value === 0) {
          return 0 + '%';
        }
        const percentage = ((value / total) * 100).toFixed(0) + '%';
        return percentage;
      },
      anchor: 'end',
      offset: -20,
      align: 'start',
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Tasks',
      color: props.theme.colors.thirdText,
      align: 'start',
      padding: { top: 0, left: 0, right: 0, bottom: 24 },
      font: {
        family: 'Inter',
        size: 14,
        weight: 600,
        lineHeight: 1.5,
      },
    },
  },
});

export const data = {
  labels: ['To Do', 'In Progress', 'Done'],
  datasets: [
    {
      label: 'tasks by day',
      // data: [40, 58, 50],
      borderRadius: 5,
      borderSkipped: 'end',
      barPercentage: 0.7,
      categoryPercentage: 0.25,
    },
    {
      label: 'tasks by month',
      // data: [90, 63, 87],
      borderRadius: 5,
      borderSkipped: 'end',
      barPercentage: 0.7,
      categoryPercentage: 0.25,
    },
  ],
};

function createGradient1(ctx, area) {
  const colorStart = 'rgba(255, 210, 221, 0.00)';
  const colorEnd = '#FFD2DD';

  const gradient1 = ctx.createLinearGradient(0, area.top, 0, area.bottom);

  gradient1.addColorStop(0.03, colorStart);
  gradient1.addColorStop(1, colorEnd);

  return gradient1;
}

function createGradient2(ctx, area) {
  const colorStart = 'rgba(62, 133, 243, 0.00)';
  const colorEnd = '#3E85F3 ';

  const gradient2 = ctx.createLinearGradient(0, area.top, 0, area.bottom);

  gradient2.addColorStop(0, colorStart);
  gradient2.addColorStop(1, colorEnd);

  return gradient2;
}

export default function StatisticsChart(props) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const allTasksByMonth = useSelector(selectTasks);
  console.log(allTasksByMonth);

  const allTasksToDo = allTasksByMonth.filter(
    task => task.category === 'to-do'
  ).length;
  // console.log(allTasksToDo);

  const allTasksInProgress = allTasksByMonth.filter(
    task => task.category === 'in-progress'
  ).length;
  // console.log(allTasksInProgress);

  const allTasksDone = allTasksByMonth.filter(
    task => task.category === 'done'
  ).length;
  // console.log(allTasksDone);

  // console.log(props.date);
  const dateMod = dayjs(props.date).format('YYYY-MM-DD');
  console.log(dateMod);
  // const dayOfSearch = '2023-10-08';

  const allTasksByDay = allTasksByMonth.filter(
    task => task.date === `${dateMod}`
  );
  // console.log(allTasksByDay);

  const tasksByDayToDo = allTasksByDay.filter(
    task => task.category === 'to-do'
  ).length;
  // console.log(tasksByDayToDo);

  const tasksByDayInProgress = allTasksByDay.filter(
    task => task.category === 'in-progress'
  ).length;
  // console.log(tasksByDayInProgress);

  const tasksByDayDone = allTasksByDay.filter(
    task => task.category === 'done'
  ).length;
  // console.log(tasksByDayDone);

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const gradients = [
      { backgroundColor: createGradient1(chart.ctx, chart.chartArea) },
      { backgroundColor: createGradient2(chart.ctx, chart.chartArea) },
    ];

    const realData = [
      { data: [tasksByDayToDo, tasksByDayInProgress, tasksByDayDone] },
      { data: [allTasksToDo, allTasksInProgress, allTasksDone] },
    ];

    const updatedData = {
      ...data,
      datasets: data.datasets.map((datasets, index) => {
        const obj2 = gradients[index];
        const obj3 = realData[index];
        return { ...datasets, ...obj2, ...obj3 };
      }),
    };

    setChartData(updatedData);
    // console.log(updatedData);

    // Оновлення опцій графіка
    chart.options = getChartOptions(props);
    // console.log(getChartOptions(props));
    chart.update();
    // console.log('chart.update')
  }, [
    props,
    allTasksDone,
    allTasksInProgress,
    allTasksToDo,
    tasksByDayDone,
    tasksByDayInProgress,
    tasksByDayToDo,
  ]);

  return (
    <>
      <s.Legend>
        <s.DayLegend>By Day</s.DayLegend>
        <s.MonthLegend>By Month</s.MonthLegend>
      </s.Legend>
      <s.DiagramWrapper>
        <Bar ref={chartRef} options={getChartOptions(props)} data={chartData} />
      </s.DiagramWrapper>
    </>
  );
}
