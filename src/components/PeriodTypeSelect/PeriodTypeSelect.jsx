export const PeriodTypeSelect = ({ switchMonthOrDay }) => {
  const handleClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'month':
        switchMonthOrDay('month');
        break;

      case 'day':
        switchMonthOrDay('day');
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h1>PeriodTypeSelect</h1>
      <button onClick={handleClick} name="month">
        month
      </button>
      <button onClick={handleClick} name="day">
        day
      </button>
    </>
  );
};
