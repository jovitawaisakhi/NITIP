// import React, { useState } from 'react';
import "./Style.css";
import { TransactionInterface } from "../../../interfaces/Transaction";
import {
  acceptTransaction,
  finishTransaction,
} from "../../../services/transaction/TransactionService";

interface FOBoxProps {
  data: TransactionInterface;
  refreshTransactions: () => void;
}

const FinishOrderBox: React.FC<FOBoxProps> = ({
  data,
  refreshTransactions,
}) => {
  // const onAccept = async () => {
  //     await acceptTransaction(data.transactionID); //ini error ga apaa
  //     refreshTransactions();
  // };

  const onAccept = async () => {
    await acceptTransaction(data.id); // Update transactionID to id
    refreshTransactions();
  };

  const onFinished = async () => {
    console.log("Finished");
    await finishTransaction(data.id); // Update transactionID to id
    refreshTransactions();
  };

  const onDecline = () => {
    console.log("Deleted");
  };

  // const onFinished = async () => {
  //     console.log('Finished');
  //     await finishTransaction(data.transactionID)
  //     refreshTransactions();
  // }

  return (
    <div className="FOBox">
      <label id="name">{data.user?.name}</label>
      {data.foods?.map((item) => (
        <label id="food">
          {item.foodName} {item.quantity}x
        </label>
      ))}
      <label id="note">Note: {data.notes}</label>
      {data.status === "confirmation" && (
        <div className="confirmation-buttons">
          <button onClick={onAccept}>Accept</button>
          <button onClick={onDecline}>Decline</button>
        </div>
      )}
      {data.status === "processing" && (
        <div className="confirmation-buttons">
          <button onClick={onFinished}>Finished</button>
        </div>
      )}
    </div>
  );
};

export default FinishOrderBox;
