import { useId } from 'react';
import useModalGlobalContext from '@/hooks/useModalGlobalContext';

type UseModalGlobalProps = {
  modalId?: string | number;
  initialState?: boolean;
};

export function useModalGlobal({
  modalId: customModalId,
}: UseModalGlobalProps = {}) {
  const modalId = customModalId?.toString() ?? useId();
  const modalContext = useModalGlobalContext();

  return {
    modalId,
    ...modalContext,
  };
}
