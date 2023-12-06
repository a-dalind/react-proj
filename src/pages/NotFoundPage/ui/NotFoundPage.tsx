import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
