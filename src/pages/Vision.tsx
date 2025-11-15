import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VisionStatement } from '@/components/VisionStatement';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Vision() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8 space-y-8">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-frame hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('vision.back')}
          </Button>
          <LanguageToggle />
        </div>

        <VisionStatement />
      </div>
    </div>
  );
}
