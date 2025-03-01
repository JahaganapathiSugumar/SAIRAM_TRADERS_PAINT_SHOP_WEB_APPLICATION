import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { translations } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-200"
      title={isDarkMode ? translations.lightMode : translations.darkMode}
    >
      {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-700" />}
    </button>
  );
};

export default ThemeToggle;