import React, { createContext, useState, useContext } from 'react';
import en from './strings/en.json';
import el from './strings/el.json';

const translations = { en, el };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('el');

  const text = (key) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ text, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);