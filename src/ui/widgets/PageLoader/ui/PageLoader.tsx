import { Loader } from 'ui/widgets/Loader';
import styles from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={styles.container}>
        <Loader />
    </div>
);
