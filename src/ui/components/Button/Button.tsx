import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'lib/classNames/classNames';
import styles from './Button.module.scss';

/* eslint-disable */
export enum ThemeButton {
    CLEAR = 'clear'
}

/* eslint-enable */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
