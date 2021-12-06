import React, {useState} from 'react';
import {themes} from '../config/theme';

interface IThemeContext {
  isDark: boolean;
  toggle?: () => void;
  themes?: Object;
}

const defaultValue = {
  isDark: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultValue);

const ThemeProvider = ({
  children,
  isDark,
}: {
  children: any;
  isDark: boolean;
}) => {
  const [isDarkTheme, setDark] = useState(isDark ?? false);

  const toggle = () => {
    setDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        themes: isDarkTheme ? themes['dark'] : themes['light'],
        isDark,
        toggle,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
