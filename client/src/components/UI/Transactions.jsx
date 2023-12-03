import "../CSS/sellerhome.css";

const Transactions = () => {
  const transactionsData = [
    {
      id: 1,
      name: "Varun",
      code: "@ 175",
      date: "18-03-2023",
      time: "21:45",
      rupees: "₹ 40.00",
    },
    {
      id: 2,
      name: "Chaitanya",
      code: "@ 199",
      date: "18-03-2023",
      time: "14:20",
      rupees: "₹ 120.00",
    },
    {
      id: 3,
      name: "Vivek",
      code: "@ 007",
      date: "10-03-2023",
      time: "10:07",
      rupees: "₹ 70.00",
    },
    {
      id: 4,
      name: "Uday",
      code: "@ 118",
      date: "9-03-2023",
      time: "18:50",
      rupees: "₹ 200.00",
    },
    {
      id: 5,
      name: "Eswar",
      code: "@ 277",
      date: "9-03-2023",
      time: "16:25",
      rupees: "₹ 30.00",
    },
  ];

  return (
    <>
      <h2 className="text-center">Transactions</h2>
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Past Transactions</th>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Rupees(&#8377;)</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {transactionsData.map((transaction) => (
            <tr key={transaction.id}>
              <th scope="row">{transaction.id}</th>
              <td>
                {transaction.name} {transaction.code}
              </td>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>{transaction.rupees}</td>
            </tr>
          ))}
        </tbody>
        <caption className="text-end">
          <a href="/seller/transactions">See All</a>
        </caption>
      </table>
    </>
  );
};

export default Transactions;

