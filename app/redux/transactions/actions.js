export const actionType = {
    SET_TRANSACTIONS: "SET_TRANSACTIONS",
    SET_MONTH_REPORT: "SET_MONTH_REPORT",
    SET_DAILY_REPORT: "SET_DAILY_REPORT",
    SET_CATEGORY_TRANSACTIONS: "SET_CATEGORY_TRANSACTIONS",
}

export const setTransactions = (transactions) => {
    return {
        type: actionType.SET_TRANSACTIONS,
        transactions: transactions,
    }
}

export const setMonthReport = (report) => {
    return {
        type: actionType.SET_MONTH_REPORT,
        monthReport: report,
    }
}

export const setDailyReport = (report) => {
    return {
        type: actionType.SET_DAILY_REPORT,
        dailyReport: report,
    }
}

export const setCategoryTransactions = (category, transactions) => {
    return {
        type: actionType.SET_CATEGORY_TRANSACTIONS,
        category: category,
        transactions: transactions,
    }
}
