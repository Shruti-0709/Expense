import React, { useState } from 'react';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: 0 });
  const [balance, setBalance] = useState(0);

  const handleInputChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const addTransaction = () => {
    if (newTransaction.description && newTransaction.amount) {
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      setBalance(prevBalance => prevBalance + parseFloat(newTransaction.amount));
      setNewTransaction({ description: '', amount: 0 });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Expense Tracker</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#555' }}>Balance: <span style={{ color: balance >= 0 ? 'green' : 'red' }}>${balance.toFixed(2)}</span></h3>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '10px' }}>Add new transaction</h3>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleInputChange}
          style={{ padding: '8px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          style={{ padding: '8px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <button
          onClick={addTransaction}
          style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
        >
          Add transaction
        </button>
      </div>

      <div>
        <h3 style={{ marginBottom: '10px' }}>Transaction history</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transactions.map((transaction, index) => (
            <li key={index} style={{ marginBottom: '8px', padding: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
              {transaction.description} - ${parseFloat(transaction.amount).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseTracker;
