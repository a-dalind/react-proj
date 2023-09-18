import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
	PRIMARY = 'primary',
	NAVBAR = 'navbar',
}

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
