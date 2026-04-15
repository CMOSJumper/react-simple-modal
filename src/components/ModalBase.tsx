import type { ReactNode, RefObject } from 'react';
import { ModalContent } from '@/components/ModalContent';

type ModalBaseProps = {
  modalContentRef: RefObject<HTMLDivElement | null>;
  className?: string;
  children: ReactNode;
};

export function ModalBase({
  modalContentRef,
  className = '',
  children,
}: ModalBaseProps) {
  return (
    <div className={`modal ${className}`} role="dialog">
      <ModalContent modalContentRef={modalContentRef}>{children}</ModalContent>
    </div>
  );
}
