import { classNames } from 'lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'ui/components/Button/Button';
import styles from './PageError.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.innerContainer}>
                <p>{t('Произошла непредвиденная ошибка')}</p>
                <Button onClick={reloadPage}>
                    {t('Обновить страницу')}
                </Button>
            </div>
        </div>
    );
};
