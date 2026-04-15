import { useContext } from 'react';
import { ModalContext } from '@/contexts/modal-context';

export default function useModalContext() {
  return useContext(ModalContext);
}
