/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { uiTranslations } from '../data/translations';

export type Language = 'zh' | 'en';

export type TranslationKey = keyof typeof uiTranslations.zh;

export interface LocalizedText {
  zh: string;
  en: string;
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  localize: (obj: LocalizedText | undefined | null) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('trilemma_lang');
    if (saved === 'zh' || saved === 'en') return saved;
    
    // Fallback to browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('trilemma_lang', lang);
  };

  const t = (key: TranslationKey): string => {
    const translation = uiTranslations[language][key];
    if (translation === undefined) {
      // Fallback to Chinese if key is missing in English or vice-versa
      return uiTranslations['zh'][key] || String(key);
    }
    return translation;
  };

  const localize = (obj: LocalizedText | undefined | null): string => {
    if (!obj) return '';
    return obj[language] || obj['zh'] || '';
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localize }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
