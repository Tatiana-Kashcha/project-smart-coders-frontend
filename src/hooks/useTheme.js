import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as ProjectThemeProvider } from 'styled-components';
import { DARK, LIGHT } from '../components/constans/thems';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme === 'dark' ? DARK : LIGHT);

  const onChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme === DARK ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
      }}
    >
      <ProjectThemeProvider theme={theme}>{children}</ProjectThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
