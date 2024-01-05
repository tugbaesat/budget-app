"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";

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

export default function ViewExpensesModal({
  open,
  budgetId,
  handleOpenClose,
}) {
  const {
    budgets,
    expenses,
    getBudgetExpenses,
    addBudget,
    addExpense,
    deleteBudget,
    deleteExpense,
  } = useBudgets();

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

      console.log(budget)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-full max-w-xs">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-black flex gap-4 items-center"
          >
            Expenses - {budget?.name}
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <button
                className="bg-red-500 hover:bg-red-700 text-white p-2  rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  deleteBudget(budgetId);
                  handleOpenClose();
                }}
              >
                Delete
              </button>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
