import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-16 py-8 border-t border-border text-center space-y-4">
      <p className="text-sm text-muted-foreground">
        {t('footer.developedBy')} <span className="font-semibold text-accent">PT-Asap</span>
      </p>
      <div className="flex justify-center gap-6 text-sm">
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          {t('footer.privacy')}
        </a>
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          {t('footer.terms')}
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2025 LEOTELL. All rights reserved.
      </p>
    </footer>
  );
};
