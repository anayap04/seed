import React from "react";
import Modal from "react-modal";

const ModalSeed = (props) => {
  const { theme,isModalOpen, setOpen, children} = props;
  const closeModal = () => {
    setOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.background,
    },
    overlay: {
      backgroundColor: theme.background+ 'b3',
    }
  };
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalSeed;
