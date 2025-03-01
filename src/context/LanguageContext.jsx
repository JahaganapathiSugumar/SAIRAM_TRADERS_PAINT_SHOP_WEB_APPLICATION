import { createContext, useState, useEffect } from 'react';
import englishTranslations from '../translations/en';
import tamilTranslations from '../translations/ta';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  const [translations, setTranslations] = useState(
    language === 'en' ? englishTranslations : tamilTranslations
  );

  useEffect(() => {
    if (language === 'en') {
      setTranslations(englishTranslations);
    } else {
      setTranslations(tamilTranslations);
    }
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};