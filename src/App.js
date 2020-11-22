import React from 'react';
import {Header} from './component/Header';
import {Balance} from './component/Balance';
import {TransactionSummary} from './component/TransactionSummary';
import {TransHistory} from './component/TransactionHistory';
import {AddTransaction} from './component/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="Zain">
      <Header />
      <div className="style">
      <Balance />
      <TransactionSummary />
      <TransHistory />
      <AddTransaction />
      </div>
    </div>
    <h3 className="copyright">2020&copy; copyright.All right reserved</h3>
    </GlobalProvider>
  );
}

export default App;
