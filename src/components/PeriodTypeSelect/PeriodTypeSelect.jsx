export const PeriodTypeSelect = ({ handleChange }) => {
  const handleClick = e => {
    const { name } = e.target;

    if (name === 'month') {
      handleChange('month');
    } else {
      handleChange('day');
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
