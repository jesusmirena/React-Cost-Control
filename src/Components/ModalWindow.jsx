import { useState } from "react";
import CloseButton from "../img/cerrar.svg";
import Message from "./Message";

const ModalWindow = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const hideModalWindow = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      setMessage("All the fields are mandatory");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, amount, category });
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseButton} alt="close modal" onClick={hideModalWindow} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>New Expense</legend>
        {message && <Message type="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Expense Name</label>
          <input
            id="name"
            type="text"
            placeholder="Add the expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the expense amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
