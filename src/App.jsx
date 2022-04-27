import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ExpensesList from "./Components/ExpensesList";
import ModalWindow from "./Components/ModalWindow";
import { generateId } from "./helpers";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, seteditExpense] = useState({});

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 200);
    }
  }, [editExpense]);

  const handleNewExpense = () => {
    setModal(true);
    seteditExpense({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 200);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              seteditExpense={seteditExpense}
              editExpense={editExpense}
            />
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
          editExpense={editExpense}
        />
      )}
    </div>
  );
}

export default App;
