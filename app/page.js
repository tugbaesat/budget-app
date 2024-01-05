"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import { BudgetsProvider } from "./contexts/BudgetContexts";
import Main from "./components/Main";

export default function Home() {
  const [openBudget, setOpenBudget] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const [openViewExpenses, setOpenViewExpenses] = useState(false);
  const [expenseModalBudgetId, setExpenseModalBudgetId] = useState();
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();

  const handleOpenCloseBudget = () => setOpenBudget(!openBudget);
  const handleOpenCloseExpense = (budgetId) => {
    setOpenExpense((prevOpenExpense) => !prevOpenExpense);
    setExpenseModalBudgetId(budgetId);
  };
  const handleOpenCloseViewExpenses = (budgetId) => {
    setOpenViewExpenses((prevOpenViewExpenses) => !prevOpenViewExpenses);
    setViewExpensesModalBudgetId(budgetId);
  };

  return (
    <BudgetsProvider>
      <main className="flex min-h-screen flex-col items-center bg-slate-400 dark:bg-slate-600">
        <Header
          onClickBudgetButton={handleOpenCloseBudget}
          onClickExpenseButton={handleOpenCloseExpense}
        />
        <Main
          openBudget={openBudget}
          openExpense={openExpense}
          openView={openViewExpenses}
          handleOpenCloseBudget={handleOpenCloseBudget}
          handleOpenCloseExpense={handleOpenCloseExpense}
          handleOpenCloseViewExpenses={handleOpenCloseViewExpenses}
          expenseModalBudgetId={expenseModalBudgetId}
          viewExpensesModalbudgetId={viewExpensesModalBudgetId}
        />
      </main>
    </BudgetsProvider>
  );
}
