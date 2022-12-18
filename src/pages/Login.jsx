import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/wallet/1");
  };

  return (
    <div className="max-w-lg m-auto">
      <h1 className="text-2xl font-semibold">
        Enter to see all about your own transactions
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 my-10 border-t border-gray-200 pt-8"
      >
        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          type="text"
          placeholder="Email"
          {...register("email")}
        />

        <input
          className="border border-gray-300 rounded-md py-2 px-3 text-sm"
          placeholder="Password"
          {...register("password")}
        />
        <button className="rounded-md py-3 text-sm font-semibold bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
