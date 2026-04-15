import { createContext } from 'react';
import type { ModalVoidAction } from '@/types/modal.types';

type ModalContextType = {
  closeModal?: ModalVoidAction;
};

export const ModalContext = createContext<ModalContextType>({
  closeModal: () => {},
});
