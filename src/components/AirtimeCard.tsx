import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Wallet, TrendingUp, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const packages = [
  { id: 'starter', minutes: 100, price: 10, icon: Wallet, badge: null },
  { id: 'popular', minutes: 300, price: 25, icon: TrendingUp, badge: 'mostPopular' },
  { id: 'premium', minutes: 600, price: 45, icon: Award, badge: null },
  { id: 'ultimate', minutes: 1200, price: 80, icon: Zap, badge: 'bestValue' },
];

export const AirtimeCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePurchase = (pkg: typeof packages[0]) => {
    navigate('/payment', { state: { package: pkg } });
  };

  return (
    <div className="space-y-8">
      <Card className="max-w-sm mx-auto p-6 bg-frame shadow-mezgebu-intense">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">{t('airtime.currentBalance')}</p>
          <p className="text-4xl font-bold text-accent">450</p>
          <p className="text-sm text-frame-foreground">{t('airtime.minutes')}</p>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-frame">{t('airtime.packages')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className="p-6 bg-frame shadow-mezgebu hover-scale relative overflow-hidden"
              >
                {pkg.badge && (
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    {t(`airtime.${pkg.badge}`)}
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/20 rounded-xl">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-frame-foreground">
                        {t(`airtime.${pkg.id}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {pkg.minutes} {t('airtime.minutes')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-accent">${pkg.price}</span>
                    <span className="text-sm text-muted-foreground">USD</span>
                  </div>

                  <Button
                    onClick={() => handlePurchase(pkg)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 shadow-mezgebu"
                  >
                    {t('airtime.buyWithCrypto')}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
