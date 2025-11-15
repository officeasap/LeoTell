import { useState } from 'react';
import leoLogo from '/leo-logo.png'; // logo from public folder
import { Header } from '@/components/Header';
import 'flag-icons/css/flag-icons.min.css';
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
        {/* Language toggle in top right */}
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>

        {/* ===== HERO LOGO SECTION (currently removed) ===== */}
        {/* Example outline if you want to re‑add later:
        <div className="flex justify-center mt-6">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center shadow-mezgebu-intense">
            <img
              src={leoLogo}
              alt="LEOTELL Logo"
              className="w-20 h-20 object-contain select-none pointer-events-none"
            />
          </div>
        </div>
        */}
        {/* =============================================== */}

        {/* Header */}
        <Header />

        {/* Navigation + active tab content */}
        <div className="mt-16 space-y-8">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="py-8">
            {activeTab === 'dialpad' && <DialPad />}
            {activeTab === 'airtime' && <AirtimeCard />}
            {activeTab === 'history' && <CallHistory />}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
