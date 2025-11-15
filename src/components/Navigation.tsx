import { useTranslation } from 'react-i18next';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const { t } = useTranslation();

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-frame h-auto p-1 gap-1">
        <TabsTrigger 
          value="dialpad" 
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-frame-foreground py-3 rounded-xl transition-all duration-300"
        >
          {t('nav.dialPad')}
        </TabsTrigger>
        <TabsTrigger 
          value="airtime" 
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-frame-foreground py-3 rounded-xl transition-all duration-300"
        >
          {t('nav.buyAirtime')}
        </TabsTrigger>
        <TabsTrigger 
          value="history" 
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-frame-foreground py-3 rounded-xl transition-all duration-300"
        >
          {t('nav.callHistory')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
