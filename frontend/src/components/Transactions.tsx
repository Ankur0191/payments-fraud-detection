"use client";
import { useState } from "react";

const transactions = [
  { id: 1, user: "John Doe", amount: 1500, risk: "High" },
  { id: 2, user: "Jane Smith", amount: 300, risk: "Low" },
  { id: 3, user: "Alice Johnson", amount: 900, risk: "Medium" },
  { id: 4, user: "Bob Williams", amount: 2500, risk: "High" },
  { id: 5, user: "Charlie Brown", amount: 450, risk: "Low" },
];

const getRiskBadge = (risk: string) => {
  if (risk === "High") return <span className="px-2 py-1 bg-red-500 text-white rounded">High</span>;
  if (risk === "Medium") return <span className="px-2 py-1 bg-yellow-500 text-black rounded">Medium</span>;
  return <span className="px-2 py-1 bg-green-500 text-white rounded">Low</span>;
};

const Transactions = () => {
  const [search, setSearch] = useState("");

  const total = transactions.length;
  const fraudCount = transactions.filter((txn) => txn.risk === "High").length;
  const fraudPercentage = total > 0 ? ((fraudCount / total) * 100).toFixed(1) : 0;

  const filteredTransactions = transactions.filter((txn) =>
    txn.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Fraud Analytics Summary */}
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg mb-4">
        <div>
          <h3 className="text-lg font-bold">Total Transactions</h3>
          <p className="text-2xl">{total}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Fraudulent Transactions</h3>
          <p className="text-2xl text-red-500">{fraudCount} ({fraudPercentage}%)</p>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by User"
        className="p-2 mb-4 w-full rounded border border-gray-500"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Amount ($)</th>
              <th className="p-2 border">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((txn) => (
              <tr key={txn.id} className="text-center">
                <td className="p-2 border">{txn.id}</td>
                <td className="p-2 border">{txn.user}</td>
                <td className="p-2 border">${txn.amount}</td>
                <td className="p-2 border">{getRiskBadge(txn.risk)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
