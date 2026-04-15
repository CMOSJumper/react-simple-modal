import { useId, useState } from 'react';

type UseModalProps = {
  modalId?: string | number;
  initialState?: boolean;
};

export function useModal({
  modalId: customModalId,
  initialState,
}: UseModalProps = {}) {
  const [openModal, setOpenModal] = useState(initialState ?? false);
  const modalId = customModalId?.toString() ?? useId();

  const toggleModal = (modalState?: boolean) => {
    setOpenModal((previousState) =>
      modalState != undefined ? modalState : !previousState,
    );
  };

  return {
    modalId,
    modalState: openModal,
    toggleModal,
  };
}
