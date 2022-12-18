import React from "react";
import Graph from "../components/Graph";
import Form from "./../components/Form";

const Wallet = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Graph />
        <Form />
      </div>
    </>
  );
};

export default Wallet;
