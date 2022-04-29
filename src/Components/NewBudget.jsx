import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBudgetAction,
  setIsValidBudgetAction,
} from "../Redux/Reducers/ExpensesReducer";
import Message from "./Message";

const NewBudget = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [budgetForm, setbudgetForm] = useState(0);

  const handleBudget = (e) => {
    e.preventDefault();
    if (!budgetForm || budgetForm < 0) {
      setMessage("It's not a valid budget");
      return;
    }
    setMessage("");

    dispatch(setIsValidBudgetAction(true));
    dispatch(setBudgetAction(budgetForm));
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="">Define budget</label>
          <input
            type="number"
            min={0}
            className="nuevo-presupuesto"
            placeholder="Add your budget"
            value={budgetForm}
            onChange={(e) => setbudgetForm(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
