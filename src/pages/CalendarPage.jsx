import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';

export default function CalendarPage() {
  const [monthOrDay, setMonthOrDay] = useState('');
  const navigate = useNavigate();

  const isFirstVisit = useMemo(() => {
    return sessionStorage.getItem('isFirstVisit');
  }, []);

  useEffect(() => {
    if (!isFirstVisit) {
      sessionStorage.setItem('isFirstVisit', 'true');
      navigate('/calendar/month/:currentDate');
    } else {
      navigate('/calendar/day/:currentDay');
    }
  }, [isFirstVisit, navigate]);

  useEffect(() => {
    switch (monthOrDay) {
      case 'month':
        navigate('/calendar/month/:currentDate');
        break;

      case 'day':
        navigate('/calendar/day/:currrentDay');
        break;

      default:
        break;
    }
  }, [monthOrDay, navigate]);

  // true = month, false = day
  const switchMonthOrDay = monthOrDay => {
    setMonthOrDay(monthOrDay);
  };

  return (
    <>
      <CalendarToolbar switchMonthOrDay={switchMonthOrDay} />
      <Outlet />
    </>
  );
}
