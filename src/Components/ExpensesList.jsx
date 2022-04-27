import Expense from "./Expense";

const ExpensesList = ({ expenses, seteditExpense, deleteExpense }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "There are no expenses yet"}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          seteditExpense={seteditExpense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
