import type { ReactNode, RefObject } from 'react';

type ModalCoreProps = {
  modalContentRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function ModalContent({ modalContentRef, children }: ModalCoreProps) {
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
