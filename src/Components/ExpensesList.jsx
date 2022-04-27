import Expense from "./Expense";

const ExpensesList = ({ expenses, seteditExpense }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "There are no expenses yet"}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          seteditExpense={seteditExpense}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
