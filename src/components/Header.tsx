import { useTranslation } from 'react-i18next';
import { Phone, Dumbbell } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center space-y-8 py-8">
      <div className="flex items-center justify-center gap-4">
        <Phone className="h-12 w-12 text-frame" />
        <h1 className="text-5xl font-bold text-frame">{t('appName')}</h1>
        <Dumbbell className="h-12 w-12 text-accent" />
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
