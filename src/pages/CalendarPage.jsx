import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Calendar() {
  // useState(true); - потрібно буде брати або з сесії або з локалки чи це перший вхід?
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const navigate = useNavigate();

  // true = month, false = day
  const switchMonthOrDay = trueOrFalse => {
    setIsFirstVisit(trueOrFalse);
  };

  useEffect(() => {
    if (isFirstVisit) {
      return navigate('/calendar/month/:currentDate');
    }
    return navigate('/calendar/day/:currrentDay');
  }, [isFirstVisit, navigate]);

  return (
    <>
      <CalendarToolbar switchMonthOrDay={switchMonthOrDay} />
      <Outlet />
    </>
  );
}
