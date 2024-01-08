import { classNames } from 'lib/classNames/classNames';
import { ThemeSwitcher } from 'ui/widgets/ThemeSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div
        className={classNames(styles.navbar, {}, [className])}
        data-testid="navbar"
    >
        <div className={styles.switchers}>
            <ThemeSwitcher />
        </div>
    </div>
);
