import { classNames } from 'lib/classNames/classNames';
import { useState } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>

            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>

        </div>
    );
};
