import CloseButton from "../img/cerrar.svg";

const ModalWindow = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModalWindow = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseButton} alt="close modal" onClick={hideModalWindow} />
      </div>
      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>
      </form>
    </div>
  );
};

export default ModalWindow;
