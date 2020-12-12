export const actionType = {
    SET_TRANSACTIONS: "SET_TRANSACTIONS",
}

export const setTransactions = (transactions) => {
    return {
        type: actionType.SET_TRANSACTIONS,
        transactions: transactions,
    }
}
