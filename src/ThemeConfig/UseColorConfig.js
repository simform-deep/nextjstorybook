import {  useEffect,  useState } from "react";
import { ThemeVariables } from "./Variables";

function useColorConfig() {
  //const [themeColor, setThemeColor] = useState(ThemeMode.Default);
  const [themevalue, setThemevalue] = useState('lightmode');
 
  const handleChange = (value) => { 
    if (value === 'lightmode') {
      setThemeColor(ThemeMode.Default);
      setThemevalue('lightmode');
    }
    if (value === 'darkmode') {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    } 
  };
  useEffect(() => { 
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    }
  }, []);
  if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const ColorScheme = event.matches ? "dark" : "light";
    if (ColorScheme === 'light') {
      setThemeColor(ThemeMode.Default);
      setThemevalue('lightmode');
    }
    if (ColorScheme === 'dark') {
      setThemeColor(ThemeMode.DarkMode);
      setThemevalue('darkmode');
    } 
  });
}
  return [handleChange, themevalue];
}
export { useColorConfig };
