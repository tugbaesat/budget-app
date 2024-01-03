import React from "react";

const Header = ({onClickButton}) => {
  return (
    <header className="flex items-center md:justify-around md:w-full gap-4 p-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Budgets
      </h1>
      <div className="flex gap-4">
        <button
          type="submit"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={onClickButton}
        >
          Add Budget
        </button>
        <button
          type="submit"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Add Expense
        </button>
      </div>
    </header>
  );
};

export default Header;
