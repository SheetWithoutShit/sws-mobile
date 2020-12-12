import React, { useState } from "react"
import { View, Text, FlatList } from "react-native"
import moment from "moment"

import Button from "@components/Buttons/Button"
import TransactionDetails from "@components/App/TransactionDetails/TransactionDetails"
import { DATE_FORMAT, DATETIME_FORMAT, CALENDAR_FORMAT } from "@utils/time"

import styles from "./style"


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
    const [transactionDetails, setTransactionDetails] = useState(null)

    const renderDayTransactions = ({ item }) => {
        const date = moment(item.date, DATE_FORMAT).calendar(null, CALENDAR_FORMAT)
        return (
            <View style={styles.dayTransactions} key={item.date}>
                <Text style={styles.date}>{date}</Text>
                {item.transactions.map(transaction => (
                    <View key={transaction.id}>
                        <Button
                            buttonStyle={styles.transaction}
                            handlePress={() => setTransactionDetails(transaction)}
                        >
                            <View style={styles.infoContainer}>
                                <Text style={styles.info}>{transaction.info}</Text>
                                <Text style={styles.category}>{transaction.category_name}</Text>
                            </View>
                            <View style={styles.amountContainer}>
                                <Text style={styles.amount}>{transaction.amount} ₴</Text>
                            </View>
                        </Button>
                    </View>
                ))}
            </View>
        )
    }

    transactions.reverse()
    return (
        <>
            <FlatList
                data={formatTransactions(transactions)}
                renderItem={renderDayTransactions}
                keyExtractor={(item) => item.date}
            />
            {transactionDetails && <TransactionDetails
                visible={true}
                transaction={transactionDetails}
                handleClose={() => setTransactionDetails(null)}
            />}
        </>
    )
}

export default TransactionsList
