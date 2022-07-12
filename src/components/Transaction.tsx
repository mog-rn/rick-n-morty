import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS_QUERY } from "../queries/getTransactions";

const Transaction = () => {
    const { loading, error, data } = useQuery(GET_TRANSACTIONS_QUERY);
    const transactions = data?.getTransaction?.getTransactions
    console.log(transactions?.transaction_id);
    

    if (loading) return <p>Loading ...</p>;
  
    if (error) return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );
  
    return (
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    );

};

export default Transaction;
