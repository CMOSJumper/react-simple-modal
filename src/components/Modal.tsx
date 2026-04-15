import { useEffect, useRef } from 'react';
import { ModalBackdrop } from '@/components/ModalBackdrop';
import { ModalContext } from '@/contexts/modal-context';
import { useModalBackdrop } from '@/hooks/useModalBackdrop';
import type { ModalCoreProps, ModalVoidAction } from '@/types/modal.types';

type ModalProps = ModalCoreProps & {
  open: boolean;
  close: ModalVoidAction;
  onOpen?: ModalVoidAction;
  onClose?: ModalVoidAction;
  backdropClassName?: string;
};

export function Modal({ open, close, onOpen, onClose, ...props }: ModalProps) {
  const { modalBackdropRef, modalContentRef, shouldCloseModal } =
    useModalBackdrop();
  const prevOpenRef = useRef(open);

  useEffect(() => {
    if (prevOpenRef.current !== undefined) {
      if (!prevOpenRef.current && open) {
        onOpen?.();
      } else if (prevOpenRef.current && !open) {
        onClose?.();
      }
    }

    prevOpenRef.current = open;
  }, [open, onOpen, onClose]);

  return (
    <ModalContext value={{ closeModal: close }}>
      <ModalBackdrop
        modalId={undefined}
        open={open}
        close={close}
        modalBackdropRef={modalBackdropRef}
        modalContentRef={modalContentRef}
        shouldCloseModal={shouldCloseModal}
        className={props.backdropClassName}
        baseClassName={props.className}
        {...props}
      >
        {props.children}
      </ModalBackdrop>
    </ModalContext>
  );
}

/*
<ModalContext value={{ closeModal: close }}>
  <div
    ref={modalBackdropRef}
    className={`modal-backdrop ${backdropClassName} ${open || openOnInit ? 'visible visible-ease disable-document-scroll' : 'invisible invisible-ease'}`}
    onClick={handleClickBackdrop}
  >
    <div className={`modal ${className}`} role="dialog">
      <ModalContent modalContentRef={modalContentRef}>
        {children}
      </ModalContent>
    </div>
  </div>
</ModalContext>

type ModalCoreProps = {
  modalContentRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

function ModalContent({ modalContentRef, children }: ModalCoreProps) {
  return (
    <div
      ref={modalContentRef}
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
*/
