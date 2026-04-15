import { type ReactNode } from 'react';

type ModalBodyProps = {
  classNames?: string;
  children: ReactNode;
};

export function ModalBody({ classNames, children }: ModalBodyProps) {
  return (
    <section className={`modal-body ${classNames ?? ''}`}>{children}</section>
  );
}
