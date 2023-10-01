import { ReactComponent as MoonIcon } from '../../icons/moon.svg';
import { ReactComponent as SunIcon } from '../../icons/sun.svg';
import * as s from './ThemeToggle.styled';

import { LIGHT } from 'components/constans';
import { useThemeContext } from 'hooks';

const ThemeToggle = () => {
  const { theme, onChangeTheme } = useThemeContext();
  const isThemeLight = theme === LIGHT;

  return (
    <s.ThemeToggleBtn type="button" onClick={onChangeTheme}>
      {isThemeLight ? <MoonIcon /> : <SunIcon />}
    </s.ThemeToggleBtn>
  );
};

export default ThemeToggle;
