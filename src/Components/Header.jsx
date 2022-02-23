import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Budget planner</h1>
      {isValidBudget ? (
        <BudgetControl budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
