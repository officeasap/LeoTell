import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import redBeret from '@/assets/red-beret.png';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center space-y-8 py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center shadow-mezgebu-intense">
          <span className="text-4xl text-muted-foreground">📱</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Phone className="h-12 w-12 text-frame" />
          <h1 className="text-5xl font-bold text-frame">{t('appName')}</h1>
          <img src={redBeret} alt="Red Beret" className="h-12 w-12 object-contain" />
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-frame">{t('tagline')}</p>
        <p className="text-base text-muted-foreground">{t('subtitle')}</p>
      </div>

      <Card className="max-w-sm mx-auto p-6 bg-frame text-frame-foreground shadow-mezgebu-intense hover-scale">
        <p className="text-sm font-medium mb-2 text-muted-foreground">{t('phoneNumber')}</p>
        <p className="text-2xl font-bold tracking-wide">{t('phoneNumber')}</p>
      </Card>
    </header>
  );
};
