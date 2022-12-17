import React from "react";
import { useForm } from "react-hook-form";
import TransactionList from "./TransactionList";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-10">
      <h1 className="font-semibold text-xl">Transctions</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 my-10"
      >
        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          type="text"
          placeholder="Salary, Groceries, Fast-food"
          {...register("name")}
        />

        <select
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          {...register("type")}
        >
          <option value="Investiment">Investiment</option>
          <option value="Expense">Expense</option>
          <option value="Saving">Saving</option>
        </select>

        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          placeholder="Amount"
          {...register("amount")}
        />
        <button className="rounded-md py-3 text-sm font-semibold bg-blue-500 text-white">
          Make transaction
        </button>
      </form>

      <TransactionList />
    </div>
  );
};

export default Form;
