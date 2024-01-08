import { classNames } from 'lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BurgerOpened from 'app/images/icons/burger/burger-opened.svg';
import BurgerClosed from 'app/images/icons/burger/burger-closed.svg';
import SidebarHome from 'app/images/icons/sidebar/icon-home.svg';
import SidebarAbout from 'app/images/icons/sidebar/icon-about.svg';
import { LangSwitcher } from 'ui/widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from 'ui/components/AppLink/AppLink';
import { RoutePath } from 'config/routeConfig/routeConfig';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={styles.burger}
            >
                {collapsed ? <BurgerClosed /> : <BurgerOpened />}
            </button>

            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.NAVBAR}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <SidebarHome className={styles.icon} />
                    <span>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.NAVBAR}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <SidebarAbout className={styles.icon} />
                    <span>{t('О сайте')}</span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
