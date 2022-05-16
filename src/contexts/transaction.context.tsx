import { createContext, FC, useContext, useMemo, useState } from "react";

import { FormData } from "src/domain";

interface TransactionContext {
  transaction?: FormData;
  setTransaction: (transaction?: FormData) => void;
}

const transactionContextDefaultValue: TransactionContext = {
  setTransaction: () => {
    console.error("The transaction context is not yet ready");
  },
};

const transactionContext = createContext<TransactionContext>(transactionContextDefaultValue);

const TransactionProvider: FC = (props) => {
  const [transaction, setTransaction] = useState<FormData>();

  const value = useMemo(() => {
    return { transaction, setTransaction };
  }, [transaction]);

  return <transactionContext.Provider value={value} {...props} />;
};

const useTransactionContext = (): TransactionContext => {
  return useContext(transactionContext);
};

export { TransactionProvider, useTransactionContext };
