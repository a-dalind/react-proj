import { useTranslation } from 'react-i18next';
import { classNames } from 'lib/classNames/classNames';
import { Button, ThemeButton } from 'ui/components/Button/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string,
  short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
