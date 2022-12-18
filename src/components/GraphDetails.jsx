const obj = [
  {
    type: "Saving",
    color: "#ff6384",
    percent: 60,
  },
  {
    type: "Investiment",
    color: "#36a2eb",
    percent: 10,
  },
  {
    type: "Expense",
    color: "#ffcd56",
    percent: 30,
  },
];

const GraphDetails = () => {
  return (
    <div className="mb-20">
      {obj.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
};

const Item = ({ data }) => {
  const { color, type, percent } = data;

  return (
    <div
      className={`flex items-center justify-between rounded-md pl-2 mt-6`}
      style={{ borderLeft: `10px solid ${color}` }}
    >
      <h1>{type ?? " "}</h1>
      <span>{percent ?? 0}%</span>
    </div>
  );
};

export default GraphDetails;
