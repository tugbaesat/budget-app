import React from "react";
import AddBudgetModal from "./AddBudgetModal";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetContexts";

const Main = ({ open, handleOpenClose }) => {
  const { budgets } = useBudgets();
  return (
    <section className="flex flex-col gap-6">
      {" "}
      {budgets.map((budget) => (
        <BudgetCard
          key={budget.id}
          name={budget.name}
          amount={1000}
          max={budget.max}
        />
      ))}
      <AddBudgetModal open={open} handleOpenClose={handleOpenClose} />
    </section>
  );
};

export default Main;
