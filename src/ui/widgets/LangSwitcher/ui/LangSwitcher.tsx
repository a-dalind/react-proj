import { useTranslation } from 'react-i18next';
import { classNames } from 'lib/classNames/classNames';
import { Button, ThemeButton } from 'ui/components/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t('Язык')}
        </Button>
    );
};
