import React from "react";
import Header from "./components/Header";
import BudgetCard from "./components/BudgetCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-400 dark:bg-slate-600 ">
      <Header/>
      <BudgetCard name="Rent" amount={500} max={1000}/>
    </main>
  );
}
