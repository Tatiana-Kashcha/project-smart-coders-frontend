import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';

export default function CalendarPage() {
  const isFirstVisit = useMemo(() => {
    const data = sessionStorage.getItem('isFirstVisit');
    return JSON.parse(data);
  }, []);

  const [monthOrDay, setMonthOrDay] = useState(!isFirstVisit);
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
