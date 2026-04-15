import { useEffect } from 'react';
import { ModalBackdrop } from '@/components/ModalBackdrop';
import { useModalBackdrop } from '@/hooks/useModalBackdrop';
import useModalGlobalContext from '@/hooks/useModalGlobalContext';
import type { ModalCoreProps, ModalVoidAction } from '@/types/modal.types';

type ModalGlobalProps = ModalCoreProps & {
  modalId: string;
  onOpen?: ModalVoidAction;
  onOpened?: ModalVoidAction;
  onClose?: ModalVoidAction;
  onClosed?: ModalVoidAction;
  backdropClassName?: string;
};

export function ModalGlobal({
  modalId,
  openOnInit = false,
  closeOnClickBackdrop = true,
  onOpen = () => {},
  onOpened = () => {},
  onClose = () => {},
  onClosed = () => {},
  className = '',
  backdropClassName = '',
  ...props
}: ModalGlobalProps) {
  //esc 27
  const { createModal, isModalOpened, toggleModal } = useModalGlobalContext();
  const { modalBackdropRef, modalContentRef, shouldCloseModal } =
    useModalBackdrop();

  useEffect(() => {
    const newModal = {
      modalId,
      isOpen: openOnInit,
      events: { onOpen, onOpened, onClose, onClosed },
    };

    createModal(newModal);
  }, []);

  return (
    <ModalBackdrop
      modalId={modalId}
      open={isModalOpened(modalId)}
      close={() => toggleModal(modalId)}
      modalBackdropRef={modalBackdropRef}
      modalContentRef={modalContentRef}
      shouldCloseModal={shouldCloseModal}
      className={backdropClassName}
      baseClassName={className}
      {...props}
    >
      {props.children}
    </ModalBackdrop>
  );
}

/*
<div
  ref={modalBackdropRef}
  className={`modal-backdrop ${backdropClassName}
    ${isModalOpened(modalId) || openOnInit ? 'visible disable-document-scroll' : 'invisible'}`}
  onClick={handleClickBackdrop}
>
  <div
    className={`modal ${className}`}
    data-modal-id={modalId}
    role="dialog"
  >
    <div
      ref={modalContentRef}
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
</div>
*/
