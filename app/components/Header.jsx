import React from "react";

const Header = ({onClickBudgetButton, onClickExpenseButton}) => {
  return (
    <header className="flex flex-col items-center md:justify-around md:w-full gap-4 p-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Budgets
      </h1>
      <div className="flex gap-2">
        <button
          className="bg-transparent hover:bg-gray-200 hover:bg-opacity-15 text-gray-200 font-semibold hover:text-white py-2.5 px-5 me-2 mb-2 text-sm border border-gray-200 rounded"
          onClick={onClickBudgetButton}
        >
          Add Budget
        </button>
        <button
         className="bg-transparent hover:bg-gray-200 hover:bg-opacity-15 text-gray-200 font-semibold hover:text-white py-2.5 px-5 me-2 mb-2 text-sm border border-gray-200 rounded"
          onClick={onClickExpenseButton}
        >
          Add Expense
        </button>
      </div>
    </header>
  );
};

export default Header;
