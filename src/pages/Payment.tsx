import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Payment() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);

  const packageData = location.state?.package;

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-8 bg-frame shadow-mezgebu-intense text-center">
          <p className="text-frame-foreground mb-4">No package selected</p>
          <Button onClick={() => navigate('/')} className="bg-accent hover:bg-accent/90">
            {t('vision.back')}
          </Button>
        </Card>
      </div>
    );
  }

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate Coinbase payment processing
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: t('payment.success'),
        description: `${packageData.minutes} minutes added to your account`,
      });
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto py-8 space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-frame hover:text-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('payment.cancel')}
        </Button>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-frame">{t('payment.title')}</h1>
        </div>

        <Card className="p-8 bg-frame shadow-mezgebu-intense space-y-6">
          <div>
            <h2 className="text-xl font-bold text-frame-foreground mb-4">
              {t('payment.orderSummary')}
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-muted-foreground">{t('payment.package')}:</span>
                <span className="font-semibold text-frame-foreground">
                  {t(`airtime.${packageData.id}`)}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-muted-foreground">{t('airtime.minutes')}:</span>
                <span className="font-semibold text-frame-foreground">
                  {packageData.minutes}
                </span>
              </div>
              <div className="flex justify-between text-lg border-t border-border pt-3">
                <span className="text-muted-foreground font-semibold">{t('payment.price')}:</span>
                <span className="font-bold text-accent text-2xl">
                  ${packageData.price} USD
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-frame-foreground mb-3">
              {t('payment.paymentMethod')}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {t('payment.cryptoPayment')}
            </p>

            <Button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold shadow-mezgebu-intense"
            >
              {processing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t('payment.processing')}
                </>
              ) : (
                t('payment.confirm')
              )}
            </Button>
          </div>
        </Card>

        <footer className="mt-8 py-4 text-center border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 LEOTELL. All rights reserved. | Developed by <span className="font-semibold text-accent">PT-Asap</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
