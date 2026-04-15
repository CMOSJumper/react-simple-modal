import { type ReactNode, useState } from 'react';
import { ModalGlobalContext } from '@/contexts/modal-global-context';
import type { Modal, ModalEvents } from '@/types/modal.types';

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalGlobalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<Record<string, Modal>>({});

  const getModal = (modalId: string) => {
    const targetModal = modals[modalId];

    return targetModal;
  };

  const createModal = (modal: Modal) =>
    setModals((prevModals) => ({ ...prevModals, [modal.modalId]: modal }));

  const updateModal = (modalId: string, modal: Partial<Modal>) => {
    const targetModal = getModal(modalId);

    setModals((prevModals: typeof modals) => ({
      ...prevModals,
      [modalId]: { ...targetModal, ...modal },
    }));
  };

  const setModalEvents = (modalId: string, modalEvents: ModalEvents) =>
    updateModal(modalId, { events: modalEvents });

  const isModalOpened = (modalId: string) => modals[modalId]?.isOpen || false;

  const openModal = (modalId: string) => {
    const targetModal = getModal(modalId);
    targetModal?.events?.onOpen?.();

    updateModal(modalId, { isOpen: true });
  };

  const closeModal = (modalId: string) => {
    const targetModal = getModal(modalId);
    targetModal?.events?.onClose?.();

    updateModal(modalId, { isOpen: false });
  };

  const toggleModal = (modalId: string) => {
    const targetModal = getModal(modalId);

    updateModal(modalId, { isOpen: !targetModal.isOpen });
  };

  return (
    <ModalGlobalContext.Provider
      value={{
        createModal,
        setModalEvents,
        isModalOpened,
        openModal,
        closeModal,
        toggleModal,
      }}
    >
      {children}
    </ModalGlobalContext.Provider>
  );
}
