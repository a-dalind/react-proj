import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div>LOGO</div>

			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.NAVBAR} to={'/'} className={styles.link}>Main</AppLink>
				<AppLink theme={AppLinkTheme.NAVBAR} to={'/about'} className={styles.link}>About</AppLink>
			</div>

			<div className={styles.switchers}>
				<LangSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	);
};
