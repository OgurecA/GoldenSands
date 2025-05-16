import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем типы для наших переводов
type LanguageOption = 'eng' | 'rus';

type TranslationEntry = {
  [key in LanguageOption]: string;
};

type Translations = {
  [section: string]: {
    [key: string]: TranslationEntry;
  };
};

// Создаем словарь с переводами
const translations: Translations = {
  cookie: {
    message: {
      eng: 'This website uses cookies to ensure you get the best experience on our website.',
      rus: 'Этот сайт использует файлы cookie для обеспечения наилучшего опыта на нашем сайте.'
    },
    acceptNecessary: {
      eng: 'Accept only necessary',
      rus: 'Принять необходимые'
    },
    acceptAll: {
      eng: 'Accept all',
      rus: 'Принять все'
    }
  },
  header: {
    title: {
      eng: 'Dubai Living',
      rus: 'Жизнь в Дубае'
    }
  },
  hero: {
    title: {
      eng: 'Explore Dubai Living Services',
      rus: 'Услуги Dubai Living'
    },
    subtitle: {
      eng: 'Your ultimate guide to living in Dubai. Get assistance with visas, bank accounts, loans, and more to make your move stress-free.',
      rus: 'Ваш путеводитель по жизни в Дубае. Получите помощь с визами, банковскими счетами, кредитами и другими услугами для комфортного переезда.'
    },
    ctaButton: {
      eng: 'Contact Us',
      rus: 'Связаться с нами'
    },
    relocationServices: {
      eng: 'Relocation Services',
      rus: 'Услуги по переезду'
    },
    expertGuidance: {
      eng: 'Expert Guidance',
      rus: 'Экспертное руководство'
    },
    testimonialQuote: {
      eng: '"Dubai Living offers exceptional relocation services for expats like me."',
      rus: '"Dubai Living предлагает исключительные услуги по релокации для экспатов, таких как я."'
    },
    testimonialAuthor: {
      eng: 'Mari Kulnup',
      rus: 'Мари Кулнуп'
    }
  },
  video: {
    title: {
      eng: 'Experience Dubai',
      rus: 'Опыт Дубая'
    },
    description: {
      eng: 'A glimpse into the luxury and lifestyle that await you in this vibrant city.',
      rus: 'Взгляд на роскошь и образ жизни, которые ждут вас в этом ярком городе.'
    },
    clickToUnmute: {
      eng: 'Click to unmute',
      rus: 'Нажмите, чтобы включить звук'
    }
  },
  relocation: {
    mainTitle: {
      eng: 'Relocation Made Easy',
      rus: 'Простой переезд'
    },
    mainDescription: {
      eng: 'Simplify your move with our comprehensive services.',
      rus: 'Упростите ваш переезд с нашими комплексными услугами.'
    },
    title: {
      eng: 'Visa Assistance',
      rus: 'Визовая поддержка'
    },
    description: {
      eng: 'We streamline the visa process, ensuring a smooth transition to Dubai. Let us handle the paperwork for you.',
      rus: 'Мы упрощаем процесс оформления визы, обеспечивая плавный переход в Дубай. Позвольте нам взять на себя всю бумажную работу.'
    },
    feature1: {
      eng: 'Fast visa processing for all types of residency',
      rus: 'Быстрое оформление виз для всех типов резиденции'
    },
    feature2: {
      eng: 'Expert guidance through the entire visa process',
      rus: 'Экспертное сопровождение на протяжении всего визового процесса'
    },
    feature3: {
      eng: 'Support with document preparation and submission',
      rus: 'Поддержка в подготовке и подаче документов'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  banking: {
    title: {
      eng: 'Bank Account Setup',
      rus: 'Открытие банковского счета'
    },
    description: {
      eng: 'Our banking experts will guide you through the process of opening an account with the top banks in Dubai.',
      rus: 'Наши банковские специалисты проведут вас через процесс открытия счета в ведущих банках Дубая.'
    },
    feature1: {
      eng: 'Access to international and local banks',
      rus: 'Доступ к международным и местным банкам'
    },
    feature2: {
      eng: 'Simplified account opening process with our assistance',
      rus: 'Упрощенный процесс открытия счета с нашей помощью'
    },
    feature3: {
      eng: 'Various account options for personal and business needs',
      rus: 'Различные варианты счетов для личных и бизнес-потребностей'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  business: {
    title: {
      eng: 'Business Setup',
      rus: 'Открытие бизнеса'
    },
    description: {
      eng: 'Let us help you establish your business in Dubai. We guide you through the entire process of company formation, ensuring compliance with local regulations.',
      rus: 'Позвольте нам помочь вам открыть бизнес в Дубае. Мы проведем вас через весь процесс создания компании, обеспечивая соответствие местным нормам.'
    }
  },
  loan: {
    title: {
      eng: 'Loan Support',
      rus: 'Поддержка по кредитам'
    },
    description: {
      eng: 'Need financial assistance? We provide guidance on loans to help you secure the funds you need for your new life in Dubai.',
      rus: 'Нужна финансовая помощь? Мы предоставляем консультации по кредитам, чтобы помочь вам получить средства, необходимые для вашей новой жизни в Дубае.'
    },
    feature1: {
      eng: 'Access to competitive interest rates with top Dubai banks',
      rus: 'Доступ к выгодным процентным ставкам в ведущих банках Дубая'
    },
    feature2: {
      eng: 'Fast application process with our assistance',
      rus: 'Быстрый процесс подачи заявки с нашей помощью'
    },
    feature3: {
      eng: 'Financing options for properties in Palm Jumeirah and other premium locations',
      rus: 'Варианты финансирования недвижимости на Пальме Джумейра и в других престижных районах'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  testimonial: {
    quote: {
      eng: 'Dubai Living offers comprehensive support for all your relocation needs.',
      rus: 'Dubai Living предлагает комплексную поддержку для всех ваших потребностей при переезде.'
    },
    author: {
      eng: 'Natalie Thompson',
      rus: 'Наталья Томпсон'
    }
  },
  cta: {
    title: {
      eng: 'Start Your Dubai Journey Today.',
      rus: 'Начните ваше путешествие в Дубай сегодня.'
    },
    button: {
      eng: 'Contact Us',
      rus: 'Связаться с нами'
    }
  },
  footer: {
    homepage: {
      eng: 'Homepage',
      rus: 'Домашняя страница'
    },
    rights: {
      eng: 'All rights reserved.',
      rus: 'Все права защищены.'
    }
  }
};

// Создаем типы для нашего контекста
type LanguageContextType = {
  language: 'eng' | 'rus';
  setLanguage: (lang: 'eng' | 'rus') => void;
  t: (section: string, key: string) => string;
};

// Создаем контекст
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Создаем провайдер для контекста
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'eng' | 'rus'>('eng');

  // Функция для получения перевода
  const t = (section: string, key: string): string => {
    try {
      return translations[section][key][language] || `${section}.${key}`;
    } catch (error) {
      console.warn(`Translation not found for ${section}.${key}`);
      return `${section}.${key}`;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};