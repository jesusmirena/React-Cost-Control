import { useState } from "react";
import Header from "./Components/Header";
import ModalWindow from "./Components/ModalWindow";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  };
  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img
            src={newExpenseIcon}
            alt="new Expense Icon"
            onClick={handleNewExpense}
          />
        </div>
      )}
      {modal && <ModalWindow setModal={setModal} />}
    </div>
  );
}

export default App;
