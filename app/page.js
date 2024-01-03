import React from "react";
import Header from "./components/Header";
import BudgetCard from "./components/BudgetCard";
import { BudgetsProvider } from "./contexts/BudgetContexts";
import AddBudgetModal from "./components/AddBudgetModal";
export default function Home() {
  return (
    <BudgetsProvider>
      <main className="flex min-h-screen flex-col items-center bg-slate-400 dark:bg-slate-600 ">
        <AddBudgetModal></AddBudgetModal>
        <Header />
        <BudgetCard name="Rent" amount={1000} max={1000} />
      </main>
    </BudgetsProvider>
  );
}
