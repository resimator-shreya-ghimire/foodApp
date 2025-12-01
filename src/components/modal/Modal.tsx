import { useEffect } from 'react';
import { Icon } from '@/components/icon/Icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModalStore } from '@/store/useModalStore';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Button } from '@/components/button/Button';


export const Modal = () => {
    const { currentModal, hideModal, isOpen } = useModalStore();

    useEffect(() => {
        useLockBodyScroll({ lock: isOpen });
    }, [isOpen]);

    if (!currentModal) return null;
    if (!isOpen) return null;

    const cancelModal = () => {
        hideModal(currentModal?.id);
        currentModal?.onCancel?.()
    };

    const confirmModal = () => {
        hideModal(currentModal?.id);
        currentModal?.onConfirm?.()
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
            <div className="bg-white rounded-lg  flex flex-col items-center mx-auto px-6 py-4 shadow-lg">
                <div className="flex w-full justify-end p-xs">
                    <Icon icon={faXmark} onClick={() => hideModal(currentModal?.id)} />
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
                                onClick={confirmModal}
                                label={currentModal?.confirmText}
                                variant='add'
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};