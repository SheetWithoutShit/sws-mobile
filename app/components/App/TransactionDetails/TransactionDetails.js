import React from "react"
import { View, Text } from "react-native"
import Modal from "@components/Modal/Modal"
import moment from "moment"

import { DATETIME_FORMAT, FRIENDLY_DATETIME_FORMAT } from "@utils/time"

import styles from "./style"


const TransactionDetails = ({ visible, transaction, handleClose }) => {
    const transactionDate = moment(transaction?.timestamp, DATETIME_FORMAT).format(FRIENDLY_DATETIME_FORMAT)
    return (
        <Modal visible={visible} handleClose={handleClose}>
            <View style={styles.container}>
                <Text style={styles.title}>{transaction.info}</Text>
                <Text style={styles.date}>{transactionDate}</Text>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Amount:</Text>
                        <Text style={styles.value}>{transaction.amount} ₴</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cashback:</Text>
                        <Text style={styles.value}>{transaction.cashback} ₴</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Category:</Text>
                        <Text style={styles.value}>{transaction.category_name}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TransactionDetails
