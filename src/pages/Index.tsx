import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { DialPad } from '@/components/DialPad';
import { AirtimeCard } from '@/components/AirtimeCard';
import { CallHistory } from '@/components/CallHistory';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dialpad');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>

        <Header />

        <div className="mt-16 space-y-8">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="py-8">
            {activeTab === 'dialpad' && <DialPad />}
            {activeTab === 'airtime' && <AirtimeCard />}
            {activeTab === 'history' && <CallHistory />}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
