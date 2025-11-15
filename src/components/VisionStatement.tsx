import { useTranslation } from 'react-i18next';
import { Sparkles, Shield, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const VisionStatement = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-frame">{t('vision.title')}</h1>
      </div>

      <Card className="p-8 bg-frame shadow-mezgebu-intense space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-frame-foreground mb-2">Vision</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t('vision.content')}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-frame-foreground mb-2">Mission</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t('vision.mission')}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
            <Globe className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-frame-foreground mb-2">Values</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t('vision.values')}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
