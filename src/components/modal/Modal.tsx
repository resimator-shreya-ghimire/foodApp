import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@/components/icon/Icon';
import { usePortal } from '@/hooks/usePortal';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModalStore } from '@/store/useModalStore';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Button } from '@/components/button/Button';

type ModalProps = {
    id: string;
};

export const Modal = ({ id }: ModalProps) => {
    const { currentModal, hideModal, isOpen } = useModalStore();

    useEffect(() => {
        useLockBodyScroll({ lock: isOpen });
    }, [isOpen]);

    const modalRoot = usePortal('modal-root');
    if (!modalRoot || !currentModal) return null;
    if (!isOpen) return null;

    const cancelModal = () => {
        hideModal(id);
        currentModal?.onCancel?.()
    };

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
            <div className="bg-white rounded w-[500px] flex flex-col items-center mx-auto p-6 shadow-lg">
                <div className="flex w-full justify-end p-4">
                    <Icon icon={faXmark} onClick={() => hideModal(id)} />
                </div>
                <div className="w-full max-w-md ">
                    <h2 className="text-xl font-semibold mb-4">{currentModal?.title}</h2>

                    <div className="mb-6">
                        <div>{currentModal?.content}</div>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        {currentModal?.cancelText && (
                            <Button
                                onClick={cancelModal}
                                label={currentModal?.cancelText}
                                variant='delete'
                            />
                        )}
                        {currentModal?.confirmText && (
                            <Button
                                onClick={() => currentModal?.onConfirm?.()}
                                label={currentModal?.confirmText}
                                variant='add'
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>,
        modalRoot
    );
};