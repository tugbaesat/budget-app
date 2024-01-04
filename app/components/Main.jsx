import React from "react";
import AddBudgetModal from "./AddBudgetModal";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetContexts";
import AddExpenseModal from "./AddExpenseModal";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";

const Main = ({
  openBudget,
  openExpense,
  handleOpenCloseBudget,
  handleOpenCloseExpense,
  expenseModalBudgetId,
}) => {
  const { budgets, getBudgetExpenses } = useBudgets();
  return (
    <section className="flex flex-col gap-6">
      {" "}
      {budgets.map((budget) => {
        const amount = getBudgetExpenses(budget.id).reduce(
          (total, expense) => total + expense.amount,
          0
        );
        return (
          <BudgetCard
            key={budget.id}
            name={budget.name}
            amount={amount}
            max={budget.max}
            handleOpenClose={() => handleOpenCloseExpense(budget.id)}
          />
        );
      })}
      <UncategorizedBudgetCard/>
      <AddBudgetModal
        open={openBudget}
        handleOpenClose={handleOpenCloseBudget}
      />
      <AddExpenseModal
        open={openExpense}
        defaultBudgetId={expenseModalBudgetId}
        handleOpenClose={handleOpenCloseExpense}
      />
    </section>
  );
};

export default Main;
