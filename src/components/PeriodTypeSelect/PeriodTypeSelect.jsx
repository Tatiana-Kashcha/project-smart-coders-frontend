export const PeriodTypeSelect = ({ switchMonthOrDay }) => {
  const handleClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'month':
        switchMonthOrDay(true);
        break;

      case 'day':
        switchMonthOrDay(false);
        break;

      default:
        break;
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
