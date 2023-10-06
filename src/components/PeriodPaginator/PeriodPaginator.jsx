import dayjs from 'dayjs';

import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const navigate = useNavigate();
  const currentMonth = dayjs(date).format('MMMM YYYY');
  const currentDay = dayjs(date).format('D MMM YYYY');
  const currentMonthModify = dayjs(date).format('MMMM-YYYY');
  const currentDayModify = dayjs(date).format('D-MMM-YYYY');

  useEffect(() => {
    if (periodType === 'month') {
      navigate(`/calendar/month/${currentMonthModify}`);
    } else {
      navigate(`/calendar/day/${currentDayModify}`);
    }
  }, [periodType, currentMonthModify, currentDayModify, navigate]);

  return (
    <>
      <span style={{ display: 'block', backgroundColor: 'pink' }}>
        {periodType === 'month' ? currentMonth : currentDay}
      </span>
      <button
        type="button"
        onClick={() => {
          upDateDate(-1);
        }}
        style={{ margin: '0 20px 0 20px' }}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => {
          upDateDate(1);
        }}
      >
        <ChevronRight />
      </button>
    </>
  );
};

/* "1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати. ✅
2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно. ✅
3. Клік по кнопках змінює дату в залежності від типу періоду:✅
 - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця✅
 - day - змінює дату поточного дня  на дату попереднього/наступного дня✅
4. Компонент форматує період:✅
 - month - MARCH 2023✅
 - day - 6 MARCH 2023" ✅*/
