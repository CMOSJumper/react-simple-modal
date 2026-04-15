import { useEffect, useRef, useState } from 'react';

export function useModalBackdrop() {
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const handleOnMouseUp = useRef<(event: MouseEvent) => void>(undefined);
  const handleOnMouseDown = useRef<(event: MouseEvent) => void>(undefined);

  useEffect(() => {
    handleOnMouseUp.current = (event: MouseEvent) => {
      if (
        shouldCloseModal &&
        modalBackdropRef.current?.contains(event.target as Node)
      ) {
        setShouldCloseModal(true);
      }
    };

    handleOnMouseDown.current = (event: MouseEvent) => {
      const shouldCloseModal_ = !modalContentRef.current!.contains(
        event.target as Node,
      );
      setShouldCloseModal(shouldCloseModal_);
    };
  }, [shouldCloseModal]);

  useEffect(() => {
    const onMouseUp_ = (event: MouseEvent) => handleOnMouseUp.current?.(event);
    const onMouseDown_ = (event: MouseEvent) =>
      handleOnMouseDown.current?.(event);

    document.addEventListener('mouseup', onMouseUp_);
    document.addEventListener('mousedown', onMouseDown_);

    return () => {
      document.removeEventListener('mouseup', onMouseUp_);
      document.removeEventListener('mousedown', onMouseDown_);
    };
  }, []);

  return { modalBackdropRef, modalContentRef, shouldCloseModal };
}
