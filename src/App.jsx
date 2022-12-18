import Form from "./components/Form";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="max-w-[900px] m-auto text-center">
      <div className="">
        <div className="block my-10 py-8 bg-sky-900 w-full text-white text-3xl font-bold tracking-wide">
          <h1>Expense Tracker</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
