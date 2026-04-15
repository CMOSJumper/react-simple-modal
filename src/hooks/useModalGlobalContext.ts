import { useContext } from 'react';
import { ModalGlobalContext } from '@/contexts/modal-global-context';

export default function useModalGlobalContext() {
  return useContext(ModalGlobalContext);
}
