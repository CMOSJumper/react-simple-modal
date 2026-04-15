import { type ReactNode, useRef } from 'react';
import useModalContext from '@/hooks/useModalContext';
import useModalGlobalContext from '@/hooks/useModalGlobalContext';
import IconX from '@/icons/IconX';

type ModalHeaderProps = {
  classNames?: string;
  children: ReactNode;
};

export function ModalHeader({ classNames = '', children }: ModalHeaderProps) {
  const { closeModal: closeSimpleModal } = useModalContext();
  const { closeModal: closeGlobalModal } = useModalGlobalContext();
  const modalIdRef = useRef<string | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    closeSimpleModal?.();

    const targetModal = e.currentTarget.closest('[data-modal-id]');

    if (targetModal && modalIdRef.current === null) {
      modalIdRef.current = targetModal.getAttribute('data-modal-id');
    }

    closeGlobalModal(modalIdRef.current ?? '');
  };

  return (
    <header className={`modal-header ${classNames ?? ''}`}>
      {children}

      <button className="modal-btn-close" onClick={(e) => handleClose(e)}>
        <IconX size={24} />
      </button>
    </header>
  );
}
