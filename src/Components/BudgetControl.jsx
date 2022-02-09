const BudgetControl = ({ budget }) => {
  const formatBudgetNumber = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span>
          {formatBudgetNumber(budget)}
        </p>
        <p>
          <span>Available:</span>
          {formatBudgetNumber(budget)}
        </p>
        <p>
          <span>Spent:</span>
          {formatBudgetNumber(budget)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
