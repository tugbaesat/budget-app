"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import { BudgetsProvider } from "./contexts/BudgetContexts";
import Main from "./components/Main";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => setOpen(!open);

  return (
    <BudgetsProvider>
      <main className="flex min-h-screen flex-col items-center bg-slate-400 dark:bg-slate-600">
        <Header onClickButton={handleOpenClose} />
        <Main open={open} handleOpenClose={handleOpenClose} />
      </main>
    </BudgetsProvider>
  );
}
