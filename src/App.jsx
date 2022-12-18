import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Graph from "./components/Graph";
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="max-w-[900px] m-auto text-center">
      <div className="">
        <div className="block my-10 py-8 bg-sky-900 w-full text-white text-3xl font-bold tracking-wide">
          <h1>Expense Tracker</h1>
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/wallet/:id" element={<Wallet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
