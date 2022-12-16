import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl">Transctions</h1>

      <div className="flex flex-col gap-4 my-8">
        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          type="text"
          placeholder="Salary, Groceries, Fast-food"
        />

        <select
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          name=""
          id=""
        >
          <option value="Investiment">Investiment</option>
          <option value="Expense">Expense</option>
          <option value="Saving">Saving</option>
        </select>

        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          type="text"
          placeholder="Amount"
        />
        <button className="rounded-md py-3 text-sm font-semibold bg-blue-500 text-white">
          Make transaction
        </button>
      </div>
    </div>
  );
};

export default Form;
