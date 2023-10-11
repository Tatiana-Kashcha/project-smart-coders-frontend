import { useEffect, useState } from 'react';

import * as s from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ handleChange, periodType }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (periodType === 'month') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [periodType]);

  const handleClick = e => {
    const { name } = e.target;

    if (name === 'month') {
      handleChange('month');
      setIsActive(true);
    } else {
      handleChange('day');
      setIsActive(false);
    }
  };

  return (
    <s.ButtonWrapper>
      <s.ButtonMonth
        type="button"
        onClick={handleClick}
        disabled={isActive}
        name="month"
      >
        Month
      </s.ButtonMonth>

      <s.ButtonDay
        type="button"
        onClick={handleClick}
        disabled={!isActive}
        name="day"
      >
        Day
      </s.ButtonDay>
    </s.ButtonWrapper>
  );
};
