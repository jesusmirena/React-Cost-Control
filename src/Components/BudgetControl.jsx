import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  expenses,
  setExpenses,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(totalSpent);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1800);
  }, [expenses]);

  const formatBudgetNumber = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetBudget = () => {
    const response = confirm("Do you want to reset the budget?");
    if (response) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage} % spent`}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: percentage > 100 ? "#DC2626" : "#3b82f6",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetBudget}>
          Reset budget
        </button>
        <p>
          <span>Budget:</span>
          {formatBudgetNumber(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
          <span>Available:</span>
          {formatBudgetNumber(available)}
        </p>
        <p>
          <span>Spent:</span>
          {formatBudgetNumber(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
