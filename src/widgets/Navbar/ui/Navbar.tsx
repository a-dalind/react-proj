import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.NAVBAR} to={'/'} className={styles.link}>Main</AppLink>
				<AppLink theme={AppLinkTheme.NAVBAR} to={'/about'} className={styles.link}>About</AppLink>
			</div>
		</div>
	);
};
