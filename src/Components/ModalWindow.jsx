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
        <div className="campo">
          <label htmlFor="name">Expense Name</label>
          <input id="name" type="text" placeholder="Add the expense name" />
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the expense amount"
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="">--Select a category--</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input type="submit" value="Add expense" />
      </form>
    </div>
  );
};

export default ModalWindow;
