import CloseButton from "../img/cerrar.svg";

const ModalWindow = ({ setModal }) => {
  const hideModalWindow = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseButton} alt="close modal" onClick={hideModalWindow} />
      </div>
    </div>
  );
};

export default ModalWindow;
