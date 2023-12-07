import { classNames } from 'lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

/* eslint-disable */
export enum AppLinkTheme {
  PRIMARY = 'primary',
  NAVBAR = 'navbar',
}
/* eslint-enable */

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
        >
            {children}
        </Link>
    );
};
