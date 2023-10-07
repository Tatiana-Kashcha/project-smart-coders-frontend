import dayjs from 'dayjs';

import * as s from './PeriodPaginator.styled';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const currentMonth = dayjs(date).format('MMMM YYYY');
  const currentDay = dayjs(date).format('D MMM YYYY');

  return (
    <>
      <span style={{ display: 'block', backgroundColor: 'pink' }}>
        {periodType === 'month' ? currentMonth : currentDay}
      </span>
      <s.ButtonWrapper>
        <s.TestStyleButton
          type="button"
          onClick={() => {
            upDateDate(-1);
          }}
        >
          <s.ChevronLeftMod />
        </s.TestStyleButton>
        <s.TestStyleButton
          type="button"
          onClick={() => {
            upDateDate(1);
          }}
        >
          <s.ChevronRightMod />
        </s.TestStyleButton>
      </s.ButtonWrapper>
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
