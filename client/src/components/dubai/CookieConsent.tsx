import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Проверяем, принял ли пользователь уже cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Если нет, показываем баннер через небольшую задержку
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'all');
    setVisible(false);
  };
  
  const acceptNecessaryCookies = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#4A2500]/90 text-white py-3 px-4 flex flex-col sm:flex-row justify-between items-center z-50 text-sm">
      <p className="mr-4 mb-3 sm:mb-0">
        {t('cookie', 'message')}
      </p>
      <div className="flex gap-2">
        <Button 
          onClick={acceptNecessaryCookies}
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white transition-colors whitespace-nowrap"
        >
          {t('cookie', 'acceptNecessary')}
        </Button>
        <Button 
          onClick={acceptAllCookies} 
          className="bg-[#E5B168] border-[#E5B168] text-[#4A2500] hover:bg-[#F6C57A] hover:border-[#F6C57A] hover:text-[#4A2500] transition-colors whitespace-nowrap"
        >
          {t('cookie', 'acceptAll')}
        </Button>
      </div>
    </div>
  );
}