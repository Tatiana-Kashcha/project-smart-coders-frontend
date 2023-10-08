import { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDate = () => useContext(DateContext);

export const DateProvider = ({ children }) => {
  const currentDate = new Date();
  const [choosedDate, setChoosedDate] = useState(currentDate);

  return (
    <DateContext.Provider value={{ choosedDate, setChoosedDate }}>
      {children}
    </DateContext.Provider>
  );
};
