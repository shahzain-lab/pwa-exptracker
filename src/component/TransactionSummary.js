import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const TransactionSummary = () => {
    const {transactions}  = useContext(GlobalContext)
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);


    const income = transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc , transaction) => (acc +=transaction),0)
    .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc , transaction) => (acc += transaction), 0)
        .toFixed(2)
        )
    return (
        <div className="display">
             <h3 className="income">INCOME <br />${income}</h3>
    <h3 className="expense">EXPENSE <br />${expense}.00</h3>
        </div>
    )
}
