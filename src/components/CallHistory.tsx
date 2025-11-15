import { useTranslation } from 'react-i18next';
import { PhoneOutgoing, PhoneIncoming, PhoneMissed, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CallRecord {
  id: string;
  type: 'outgoing' | 'incoming' | 'missed';
  number: string;
  timestamp: string;
  duration: string;
}

const mockCallHistory: CallRecord[] = [
  { id: '1', type: 'outgoing', number: '+1 (555) 123-4567', timestamp: '2 hours ago', duration: '5:32' },
  { id: '2', type: 'incoming', number: '+33 1 23 45 67 89', timestamp: '5 hours ago', duration: '12:15' },
  { id: '3', type: 'missed', number: '+251 11 123 4567', timestamp: 'Yesterday', duration: '-' },
  { id: '4', type: 'outgoing', number: '+1 (555) 987-6543', timestamp: 'Yesterday', duration: '3:45' },
  { id: '5', type: 'incoming', number: '+33 6 12 34 56 78', timestamp: '2 days ago', duration: '8:20' },
];

export const CallHistory = () => {
  const { t } = useTranslation();

  const getCallIcon = (type: CallRecord['type']) => {
    switch (type) {
      case 'outgoing':
        return <PhoneOutgoing className="h-5 w-5 text-accent" />;
      case 'incoming':
        return <PhoneIncoming className="h-5 w-5 text-accent" />;
      case 'missed':
        return <PhoneMissed className="h-5 w-5 text-destructive" />;
    }
  };

  const getCallTypeColor = (type: CallRecord['type']) => {
    return type === 'missed' ? 'text-destructive' : 'text-accent';
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center text-frame mb-6">{t('callHistory.title')}</h2>

      {mockCallHistory.length === 0 ? (
        <Card className="p-8 text-center bg-frame shadow-mezgebu">
          <p className="text-muted-foreground">{t('callHistory.noHistory')}</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {mockCallHistory.map((call) => (
            <Card
              key={call.id}
              className="p-4 bg-frame shadow-mezgebu hover-scale cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2 bg-background rounded-xl ${getCallTypeColor(call.type)}`}>
                    {getCallIcon(call.type)}
                  </div>
                  <div>
                    <p className="font-semibold text-frame-foreground">{call.number}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="capitalize">{t(`callHistory.${call.type}`)}</span>
                      <span>•</span>
                      <span>{call.timestamp}</span>
                    </div>
                  </div>
                </div>
                
                {call.duration !== '-' && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{call.duration}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
