import { useState } from "react";
import Header from "./Components/Header";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
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
          <img src={newExpenseIcon} alt="new Expense Icon" />
        </div>
      )}
    </div>
  );
}

export default App;
