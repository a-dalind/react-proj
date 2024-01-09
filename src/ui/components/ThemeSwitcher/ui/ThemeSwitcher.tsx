import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'lib/classNames/classNames';
import LightIcon from 'app/images/icons/theme/theme-light.svg';
import DarkIcon from 'app/images/icons/theme/theme-dark.svg';
import { Button, ThemeButton } from 'ui/components/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
