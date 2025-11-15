import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, PhoneOff, Delete } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const dialButtons = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9',
  '*', '0', '#',
];

export const DialPad = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'connected'>('idle');

  const handleNumberClick = (num: string) => {
    setPhoneNumber(prev => prev + num);
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = async () => {
    if (!phoneNumber) {
      toast({
        title: "Error",
        description: t('dialPad.enterNumber'),
        variant: "destructive",
      });
      return;
    }

    setCallStatus('calling');
    toast({
      title: t('dialPad.calling'),
      description: phoneNumber,
    });

    // Simulate call connection (Twilio integration would go here)
    setTimeout(() => {
      setCallStatus('connected');
      toast({
        title: t('dialPad.connected'),
        description: phoneNumber,
      });
    }, 2000);
  };

  const handleEndCall = () => {
    setCallStatus('idle');
    toast({
      title: t('dialPad.callEnded'),
    });
  };

  return (
    <Card className="max-w-md mx-auto p-8 bg-frame shadow-mezgebu-intense">
      <div className="space-y-8">
        <div className="relative">
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={t('dialPad.enterNumber')}
            className="text-2xl h-16 text-center bg-background text-frame border-accent pr-12"
            disabled={callStatus !== 'idle'}
          />
          {phoneNumber && callStatus === 'idle' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent"
            >
              <Delete className="h-5 w-5" />
            </Button>
          )}
        </div>

        {callStatus !== 'idle' && (
          <div className="text-center py-4 animate-fade-in">
            <p className="text-xl font-semibold text-frame-foreground">
              {callStatus === 'calling' ? t('dialPad.calling') : t('dialPad.connected')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          {dialButtons.map((num) => (
            <Button
              key={num}
              onClick={() => handleNumberClick(num)}
              disabled={callStatus !== 'idle'}
              className="h-16 text-2xl font-semibold bg-background text-frame hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover-scale shadow-mezgebu"
            >
              {num}
            </Button>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {callStatus === 'idle' ? (
            <Button
              onClick={handleCall}
              className="flex-1 h-14 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-mezgebu-intense"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t('dialPad.call')}
            </Button>
          ) : (
            <Button
              onClick={handleEndCall}
              className="flex-1 h-14 text-lg font-semibold bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-mezgebu-intense"
            >
              <PhoneOff className="mr-2 h-5 w-5" />
              {t('dialPad.endCall')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
