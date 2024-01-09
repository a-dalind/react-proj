import React, {
    ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'lib/classNames/classNames';
import IconClose from 'app/images/icons/burger/burger-opened.svg';
import { useTranslation } from 'react-i18next';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { t } = useTranslation();

    // ур 29
    const closeHandler = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div
                        className={styles.content}
                        onClick={onContentClick}
                    >
                        <button
                            onClick={closeHandler}
                            className={styles.close}
                            type="button"
                            aria-label={t('Закрыть окно')}
                        >
                            <IconClose />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
