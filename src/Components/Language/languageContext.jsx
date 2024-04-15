import { createContext, useState, useEffect } from 'react';
import en from './en';
import ja from './ja';
import id from './id';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    switch (language) {
      case 'en':
        setTranslations(en);
        break;
      case 'ja':
        setTranslations(ja);
        break;
      case 'id':
        setTranslations(id);
        break;
      default:
        setTranslations(en);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
