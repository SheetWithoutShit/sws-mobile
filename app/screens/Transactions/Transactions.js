import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"

import Header from "@components/Header/Header"
import TransactionsList from "@components/App/TransactionsList/TransactionsList"
import { getTransactions } from "@api/transactions"

import styles from "./style"


const Transactions = () => {
    const dispatch = useDispatch()

    const currentDate = moment().format("ll")
    const { transactions } = useSelector(state => state.transactions)

    useEffect(() => {
        dispatch(getTransactions())
    }, [dispatch])

    return (
        <View style={styles.container}>
            <Header text={currentDate}/>
            {transactions.length
                ? <TransactionsList transactions={transactions}/>
                : <View style={styles.containerInfo}>
                    <Text style={styles.info} isSecondary={true}>No existing transactions</Text>
                </View>
            }
        </View>
    )
}

export default Transactions
