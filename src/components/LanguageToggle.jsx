import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
    >
      {language === 'en' ? translations.tamil : translations.english}
    </button>
  );
};

export default LanguageToggle;