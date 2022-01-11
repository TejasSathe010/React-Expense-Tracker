import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransactions } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(transactionType);
        const newTransactions = {
            id: Date.now(),
            text: text,
            amount: transactionType * amount
            // ParstInt
        };
        addTransactions(newTransactions);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Item</label>
                    <input type="text" value={text} onChange={(e) => {
                        setText(e.target.value);
                    }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Select Transaction Type</label>
                    <div className="custom-select-div">
                        <select class="custom-select" onChange={(e) => {
                            setTransactionType(e.target.value)
                        }}>
                            <option value="1">Income</option>
                            <option value="-1">Expense</option>
                        </select>
                    </div>
                    <input type="number" value={amount} onChange={(e) => {
                        setAmount(e.target.value);
                    }} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
