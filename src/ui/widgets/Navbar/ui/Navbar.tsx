import { classNames } from 'lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'ui/components/AppLink/AppLink';
import { ThemeSwitcher } from 'ui/widgets/ThemeSwitcher';
import { LangSwitcher } from 'ui/widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(styles.navbar, {}, [className])}
            data-testid="navbar"
        >
            <div>LOGO</div>

            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.NAVBAR} to="/" className={styles.link}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.NAVBAR} to="/about" className={styles.link}>
                    {t('О сайте')}
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
