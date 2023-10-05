import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';

export default function CalendarPage() {
  const isFirstVisit = JSON.parse(sessionStorage.getItem('isFirstVisit'));

  // // true = month, false = day
  const [monthOrDay, setMonthOrDay] = useState(!isFirstVisit); // !isFirstVisit = true
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('isFirstVisit', 'true');
  }, []);

  useEffect(() => {
    switch (monthOrDay) {
      case true:
        navigate('/calendar/month/:currentDate');
        break;

      case false:
        navigate('/calendar/day/:currrentDay');
        break;

      default:
        break;
    }
  }, [monthOrDay, navigate]);

  // // true = month, false = day
  const switchMonthOrDay = monthOrDay => {
    setMonthOrDay(monthOrDay);
  };

  return (
    <>
      <CalendarToolbar switchMonthOrDay={switchMonthOrDay} />
      {monthOrDay ? <ChoosedMonth /> : <ChoosedDay />}
    </>
  );
}

/* "1. Компонент рендериться на маршрут /calendar. ✅
2. При першому вході на сторінку компонент виконує переадресацію на розширений маршрут /calendar/month/:currentDate для відображення календяря місяця ✅
2. Сторінка повинна відображатись відповідно до макету на 3х розширеннях(375, 768, 1440) ✅
3. На сторінці знаходиться модуль CalendarToolbar - з яким користувач може обрати тип періоду, та його інтервал ✅
4. На сторінці відображаеться один з модулів періоду дат календаря:
 - ChoosedMonth - дозволяє подивитись всі задачі на місяць, перейти на сторінку одного дня ChoosedDay. ✅
 - ChoosedDay - дозволяє створювати задачі та розділити ці задачі  на групи по ступеню їх виконання. ✅
5. При новому відвідуванні додатку та першому вході на сторінку відображаеться модуль ChoosedMonth з розкладкою комірок з датами поточного місяця. ✅
6. На сторінці повинен здійснюватись запит за завданнями, якщо вони відсутні в глобальному стейті ➖
7. Успіх - дані записуються у відповідний стейт ➖
8. Помилка - користувачу показується відповідне пуш-повідомлення" ➖ */
