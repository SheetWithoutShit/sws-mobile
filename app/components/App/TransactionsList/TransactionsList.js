import React from "react"
import { View, Text, FlatList } from "react-native"
import moment from "moment"

import { DATE_FORMAT, DATETIME_FORMAT } from "@utils/time"

import styles from "./style"


const CALENDAR_FORMAT = {
    sameDay: "[Today]",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "DD.MM",
}


const renderDayTransactions = ({ item }) => {
    const date = moment(item.date, DATE_FORMAT).calendar(CALENDAR_FORMAT)
    return (
        <View style={styles.dayTransactions} key={item.date}>
            <Text style={styles.date}>{date}</Text>
            {item.transactions.map(transaction => (
                <View style={styles.transaction} key={transaction.id}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>{transaction.info}</Text>
                        <Text style={styles.category}>{transaction.category_name}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{transaction.amount} ₴</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

const formatTransactions = (data) => {
    const transactions = {}
    data.forEach(item => {
        const transactionDate = moment(item["timestamp"], DATETIME_FORMAT).format(DATE_FORMAT)
        if (!Object.keys(transactions).includes(transactionDate)) {
            transactions[transactionDate] = []
        }
        transactions[transactionDate].push(item)
    })
    return Object.keys(transactions).map(key => ({
        transactions: transactions[key],
        date: key,
    }))
}


const TransactionsList = ({ transactions }) => {
    return (
        <FlatList
            data={formatTransactions(transactions)}
            renderItem={renderDayTransactions}
            keyExtractor={(item) => item.date}
        />
    )
}

export default TransactionsList
