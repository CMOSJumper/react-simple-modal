import type { ReactNode } from 'react';

export type ModalVoidAction = () => void;

export type Modal = {
  modalId: string;
  isOpen: boolean;
  events?: ModalEvents;
};

export type ModalEvents = {
  onOpen?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
};

export type ModalCoreProps = {
  openOnInit?: boolean;
  closeOnClickBackdrop?: boolean;
  className?: string;
  backdropType?: ModalBackdropType;
  closeAnimationClass?: string;
  children: ReactNode;
};

const modalBackdropDefaultType = 'transparent';

export enum ModalBackdropType {
  DEFAULT = modalBackdropDefaultType,
  BLUR = 'blur',
  TRANSPARENT = modalBackdropDefaultType,
}
