import './App.css';
import { Modal } from '@/components/Modal';
import { ModalBody } from '@/components/ModalBody';
import { ModalFooter } from '@/components/ModalFooter';
import { ModalGlobal } from '@/components/ModalGlobal';
import { ModalHeader } from '@/components/ModalHeader';
import { useModal } from '@/hooks/useModal';
import { useModalGlobal } from '@/hooks/useModalGlobal';
import { ModalBackdropType } from '@/types/modal.types';

export default function App() {
  const { modalState, toggleModal } = useModal();
  const { modalState: modalState2, toggleModal: toggleModal2 } = useModal();

  const { modalId, openModal } = useModalGlobal();
  const { modalId: modalId2, openModal: openModal2 } = useModalGlobal();

  return (
    <main>
      <Modal
        open={modalState}
        close={toggleModal}
        onOpen={() => console.log('open simple modal')}
        onClose={() => console.log('close simple modal')}
        backdropType={ModalBackdropType.BLUR}
      >
        <ModalHeader>
          This is the modal headerasdddd asda ds asdasd asdasdd asdasd asdasd
          asdasd asdasd asdasd asdasda assd
        </ModalHeader>
        <ModalBody>This is the modal body</ModalBody>
        <ModalFooter>this is the modal footer </ModalFooter>
      </Modal>

      <Modal
        open={modalState2}
        close={toggleModal2}
        backdropType={ModalBackdropType.TRANSPARENT}
      >
        <ModalHeader>This is the modal header 2</ModalHeader>
        <ModalBody>This is the modal body 2</ModalBody>
        <ModalFooter>this is the modal footer 2</ModalFooter>
      </Modal>

      <ModalGlobal
        modalId={modalId}
        onOpen={() => {
          console.log('on opeeeen');
        }}
      >
        <ModalHeader>This is the global modal header</ModalHeader>
        <ModalBody>This is the global modal body</ModalBody>
        <ModalFooter>this is the global modal footer</ModalFooter>
      </ModalGlobal>

      <ModalGlobal modalId={modalId2}>
        <ModalHeader>This is the global modal header 2</ModalHeader>
        <ModalBody>This is the global modal body 2</ModalBody>
        <ModalFooter>this is the global modal footer 2</ModalFooter>
      </ModalGlobal>

      <button type="button" onClick={() => toggleModal()}>
        Open modal
      </button>
      <button type="button" onClick={() => toggleModal2()}>
        Open modal 2
      </button>

      <button type="button" onClick={() => openModal(modalId)}>
        Open global modal
      </button>
      <button type="button" onClick={() => openModal2(modalId2)}>
        Open global modal 2
      </button>
    </main>
  );
}
