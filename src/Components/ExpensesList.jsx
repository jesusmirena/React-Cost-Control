import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  seteditExpense,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length ? "Expenses" : "There are no expenses yet"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              seteditExpense={seteditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "There are no expenses yet"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              seteditExpense={seteditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
