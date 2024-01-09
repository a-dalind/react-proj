import { classNames } from 'lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Modal } from 'ui/components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'ui/components/Button/Button';
import { ThemeSwitcher } from 'ui/components/ThemeSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div
            className={classNames(styles.navbar, {}, [className])}
            data-testid="navbar"
        >
            <div className={styles.links}>
                <Button
                    theme={ThemeButton.BG_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>123123</Modal>

            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
