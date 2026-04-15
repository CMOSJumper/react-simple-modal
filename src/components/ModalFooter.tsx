import { type ReactNode } from 'react';

type ModalFooterProps = {
  classNames?: string;
  children: ReactNode;
};

export function ModalFooter({ classNames, children }: ModalFooterProps) {
  return (
    <footer className={`modal-footer ${classNames ?? ''}`}>{children}</footer>
  );
}
