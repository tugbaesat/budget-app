import React from "react";
import AddBudgetModal from "./AddBudgetModal";
import BudgetCard from "./BudgetCard";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";
import AddExpenseModal from "./AddExpenseModal";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";
import ViewExpensesModal from "./ViewExpensesModal";

const Main = ({
  openBudget,
  openExpense,
  openView,
  handleOpenCloseBudget,
  handleOpenCloseExpense,
  handleOpenCloseViewExpenses,
  expenseModalBudgetId,
  viewExpensesModalbudgetId,
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
            handleAddOpenClose={() => handleOpenCloseExpense(budget.id)}
            handleViewOpenClose={() => handleOpenCloseViewExpenses(budget.id)}
          />
        );
      })}
      <UncategorizedBudgetCard
        handleAddOpenClose={handleOpenCloseExpense}
        handleViewOpenClose={() =>
          handleOpenCloseViewExpenses(UNCATEGORIZED_BUDGET_ID)
        }
      />
      <TotalBudgetCard />
      <AddBudgetModal
        open={openBudget}
        handleOpenClose={handleOpenCloseBudget}
      />
      <AddExpenseModal
        open={openExpense}
        defaultBudgetId={expenseModalBudgetId}
        handleOpenClose={handleOpenCloseExpense}
      />
      <ViewExpensesModal
        open={openView}
        budgetId={viewExpensesModalbudgetId}
        handleOpenClose={handleOpenCloseViewExpenses}
      />
    </section>
  );
};

export default Main;
