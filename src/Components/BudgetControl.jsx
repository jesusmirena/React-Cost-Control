import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);

  const formatBudgetNumber = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={50} />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span>
          {formatBudgetNumber(budget)}
        </p>
        <p>
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
