import React from "react";
import { currencyFormatter } from "../utils";
import { Wix_Madefor_Text } from "next/font/google";

const BudgetCard = ({ name, amount, max }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-800 dark:text-gray-200">
          <span>{currencyFormatter.format(amount)} </span> /{" "}
          <span className="font-light text-gray-500 dark:text-gray-500 text-xs">
            {currencyFormatter.format(max)}
          </span>
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "50%"}}></div>
      </div>

      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      </a>
    </div>
  );
};

export default BudgetCard;
