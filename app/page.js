"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import { BudgetsProvider } from "./contexts/BudgetContexts";
import Main from "./components/Main";

export default function Home() {
  const [openBudget, setOpenBudget] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const [expenseModalBudgetId, setExpenseModalBudgetId] = useState();

  const handleOpenCloseBudget = () => setOpenBudget(!openBudget);
  const handleOpenCloseExpense = (budgetId) => {
    setOpenExpense((prevOpenExpense) => !prevOpenExpense);
    setExpenseModalBudgetId(budgetId);
  }

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
          handleOpenCloseBudget={handleOpenCloseBudget}
          handleOpenCloseExpense={handleOpenCloseExpense}
          expenseModalBudgetId={expenseModalBudgetId}
        />
      </main>
    </BudgetsProvider>
  );
}
