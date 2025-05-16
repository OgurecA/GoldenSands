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

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#4A2500]/90 text-white py-3 px-4 flex flex-col sm:flex-row justify-between items-center z-50 text-sm">
      <p className="mr-4 mb-2 sm:mb-0">
        {t('cookie', 'message')}
      </p>
      <div className="flex gap-2">
        <Button 
          onClick={declineCookies}
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white transition-colors"
        >
          {t('cookie', 'decline')}
        </Button>
        <Button 
          onClick={acceptCookies}
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-[#4A2500] transition-colors"
        >
          {t('cookie', 'accept')}
        </Button>
      </div>
    </div>
  );
}