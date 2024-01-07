"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";
import { currencyFormatter } from "../utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ViewExpensesModal({ open, budgetId, handleOpenClose }) {
  const {
    budgets,
    getBudgetExpenses,
    addBudget,
    addExpense,
    deleteBudget,
    deleteExpense,
  } = useBudgets();
  const expenses = getBudgetExpenses(budgetId);

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-full max-w-xs flex flex-col gap-4 justify-between "
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-black flex gap-4 items-center justify-between"
          >
            <span className="text-sm">{budget?.name} Expenses</span>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <button
                className="bg-red-500 hover:bg-red-700 text-white p-2  rounded focus:outline-none focus:shadow-outline text-sm"
                onClick={() => {
                  deleteBudget({ id: budgetId });
                  handleOpenClose();
                }}
              >
                Delete
              </button>
            )}
          </Typography>
          {expenses.map((expense) => (
            <div
              className="text-black flex justify-between items-center border-b pb-2 text-sm"
              key={expense.id}
            >
              <p>{expense.description}</p>
              <div className="flex gap-2 items-center">
                <p>{currencyFormatter.format(expense.amount)}</p>
                <button
                  className="bg-transparent border border-red-500 hover:bg-red-500 hover:text-white text-red-500 rounded p-2 focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    deleteExpense(expense);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
