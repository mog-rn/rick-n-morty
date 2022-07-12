import { gql } from "graphql-tag";

export const GET_TRANSACTIONS_QUERY = gql`
  query getTransaction {
    getTransactions {
      transaction_id
      transaction_amount
      transaction_category
      to {
        user_id
        user_name
        user_email
      }
      transaction_date
    }
  }
`;
