import { type RefObject, useEffect, useState } from 'react';
import { ModalBase } from '@/components/ModalBase';
import {
  ModalBackdropType,
  type ModalCoreProps,
  type ModalVoidAction,
} from '@/types/modal.types';
import '@/styles/Modal.css';

type ModalBackdropProps = ModalCoreProps & {
  modalId: string | undefined;
  modalBackdropRef: RefObject<HTMLDivElement | null>;
  modalContentRef: RefObject<HTMLDivElement | null>;
  open: boolean;
  close: ModalVoidAction;
  shouldCloseModal: boolean;
  baseClassName?: string;
};

export function ModalBackdrop({
  modalId,
  className = '',
  baseClassName = '',
  backdropType = ModalBackdropType.DEFAULT,
  closeOnClickBackdrop = true,
  ...props
}: ModalBackdropProps) {
  const [showModal, setShowModal] = useState(props.open || props.openOnInit);
  const resolveBackdropType = () => 'modal-backdrop-' + backdropType;

  const handleClickBackdrop = () => {
    if (closeOnClickBackdrop && props.shouldCloseModal) {
      props.close();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setShowModal(props.open || props.openOnInit),
      100,
    );

    return () => clearTimeout(timeout);
  }, [props.open, props.openOnInit]);

  return (
    <div
      ref={props.modalBackdropRef}
      className={`modal-backdrop
        ${resolveBackdropType()} 
        ${className} 
        ${
          props.open || props.openOnInit
            ? `show ${showModal && 'visible-ease'} disable-document-scroll`
            : `${!showModal && 'd-none'} invisible-ease`
        }`}
      onClick={handleClickBackdrop}
      data-modal-id={modalId}
    >
      <ModalBase
        modalContentRef={props.modalContentRef}
        className={`${baseClassName} ${props.closeAnimationClass || ''}`}
      >
        {props.children}
      </ModalBase>
    </div>
  );
}
