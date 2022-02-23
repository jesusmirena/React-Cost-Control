import { useState } from "react";
import Header from "./Components/Header";
import ExpensesList from "./Components/ExpensesList";
import ModalWindow from "./Components/ModalWindow";
import { generateId } from "./helpers";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 200);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
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
        <>
          <main>
            <ExpensesList expenses={expenses} />
          </main>

          <div className="nuevo-gasto">
            <img
              src={newExpenseIcon}
              alt="new Expense Icon"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}
      {modal && (
        <ModalWindow
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
