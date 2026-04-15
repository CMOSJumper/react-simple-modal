import { createContext } from 'react';
import type { Modal, ModalEvents } from '@/types/modal.types';

type ModalGlobalContextType = {
  createModal: (modal: Modal) => void;
  setModalEvents: (modalId: string, modalEvents: ModalEvents) => void;
  isModalOpened: (modalId: string) => boolean;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  toggleModal: (modalId: string) => void;
};

export const ModalGlobalContext = createContext<ModalGlobalContextType>({
  createModal: () => {},
  setModalEvents: () => {},
  isModalOpened: () => false,
  openModal: () => {},
  closeModal: () => {},
  toggleModal: () => {},
});
