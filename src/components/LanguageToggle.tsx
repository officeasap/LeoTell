import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Use ISO country codes for flag-icons (us, id, fr)
const languages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'ind', name: 'Bahasa (Barsa)', flag: 'id' },
  { code: 'fr', name: 'Français', flag: 'fr' },
];

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-frame text-frame-foreground border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-[0_6px_20px_hsl(0_0%_1%/0.5)]"
        >
          <Globe className="h-4 w-4" />
          {/* Flag-icons span */}
          <span className={`fi fi-${currentLanguage.flag} w-5 h-5`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-frame border-accent">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer gap-2 ${
              i18n.language === lang.code
                ? 'bg-accent text-accent-foreground'
                : 'text-frame-foreground hover:bg-accent/20'
            }`}
          >
            <span className={`fi fi-${lang.flag} w-5 h-5`} />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
