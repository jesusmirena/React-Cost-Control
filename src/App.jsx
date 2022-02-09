import { useState } from "react";
import Header from "./Components/Header";
import ModalWindow from "./Components/ModalWindow";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 200);
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
      {modal && (
        <ModalWindow
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
