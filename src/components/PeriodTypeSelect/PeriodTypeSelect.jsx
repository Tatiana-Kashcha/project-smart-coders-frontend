import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

export const PeriodTypeSelect = ({ periodType }) => {
  const newDate = new Date();
  const month = newDate.setMonth(newDate.getMonth());
  const day = newDate.setDate(newDate.getDate());
  const currentMonth = dayjs(month).format('MMMM-YYYY').toLowerCase();
  const currentDay = dayjs(day).format('D-MMM-YYYY').toLowerCase();

  const navigate = useNavigate();

  const handleClick = e => {
    const { name } = e.target;

    if (name === 'month') {
      navigate(`/calendar/month/${currentMonth}`);
    } else {
      navigate(`/calendar/day/${currentDay}`);
    }
  };

  return (
    <>
      <h1>PeriodTypeSelect</h1>
      <button type="button" onClick={handleClick} name="month">
        month
      </button>
      <button type="button" onClick={handleClick} name="day">
        day
      </button>
    </>
  );
};

/* "1. Компонент рендерить блок навігації для переадресацї юзера на таблицю з задачами відповідно до обраного типу періоду day | month. ✅
2. Кнопка що вказує поточний тип обраного періоду має активні стилі, як показано на макеті." */
