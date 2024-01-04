import React from "react";
import { currencyFormatter } from "../utils";

const BudgetCard = ({ name, amount, max, handleOpenClose }) => {
  const bgColor = [];
  if (amount / max < 0.5) {
    bgColor.push("bg-blue-500", "bg-opacity-40");
  } else if (amount / max < 0.75) {
    bgColor.push("bg-yellow-500", "bg-opacity-10");
  }
  else {
    bgColor.push("bg-red-500", "bg-opacity-10");

  }
  const progressBarColor = [];
  if (amount / max < 0.5) {
    progressBarColor.push("bg-blue-500");
  } else if (amount / max < 0.75) {
    progressBarColor.push("bg-yellow-500");
  } else {
    progressBarColor.push("bg-red-500");
  }

  return (
    <div
      className={`${bgColor.join(
        " "
      )} max-w-sm p-6 border border-gray-500 rounded-lg shadow  w-full`}
    >
      <div className="flex justify-between items-center mb-4 ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-800 dark:text-gray-200">
          <span>{currencyFormatter.format(amount)} </span> /{" "}
          <span className="font-light text-gray-500 dark:text-gray-400 text-xs">
            {currencyFormatter.format(max)}
          </span>
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4 overflow-hidden">
        <div
          className={`${progressBarColor.join(" ")} h-2.5 rounded-full `}
          style={{ width: `${(amount / max) * 100}%` }}
          ></div>
      </div>
      <div className="flex gap-2 justify-end">
        <button className="bg-transparent hover:bg-gray-200 hover:bg-opacity-15 text-blue-400 font-semibold hover:text-blue-700 py-2.5 px-5 me-2 mb-2 text-sm border border-blue-400 rounded" onClick={handleOpenClose}>
          Add Expense
        </button>

        <button className="bg-transparent hover:bg-gray-200 hover:bg-opacity-15 text-gray-200 font-semibold hover:text-white py-2.5 px-5 me-2 mb-2 text-sm border border-gray-200 rounded">
          View Expenses
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;
