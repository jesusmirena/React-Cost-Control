import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ExpensesList from "./Components/ExpensesList";
import ModalWindow from "./Components/ModalWindow";
import Filters from "./Components/Filters";
import { generateId } from "./helpers";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );

  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, seteditExpense] = useState({});

  const [filter, setFilter] = useState("");

  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 200);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      const expensesByCategory = expenses.filter(
        (expense) => expense.category === filter
      );
      setFilteredExpenses(expensesByCategory);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpense = () => {
    setModal(true);
    seteditExpense({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 200);
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Updating expense
      const updatedExpenses = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(updatedExpenses);
      seteditExpense({});
    } else {
      //New expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
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
            <Filters filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              seteditExpense={seteditExpense}
              editExpense={editExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
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
          seteditExpense={seteditExpense}
          editExpense={editExpense}
        />
      )}
    </div>
  );
}

export default App;
