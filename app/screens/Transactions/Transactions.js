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
// TODO: replace with API data
const MOCK_TRANSACTIONS = [
    {
        "id": "A1vVPVMbevHyWMEW",
        "amount": "158.00",
        "info": "Від: 535129****7175",
        "timestamp": "2020.10.27 15:06:57",
        "category_name": "Other",
    },
    {
        "id": "uPA8ydjTmLWrk96g",
        "amount": "-78.00",
        "info": "Bolt",
        "timestamp": "2020.10.26 11:30:07",
        "category_name": "Taxi",
    },
    {
        "id": "oFLLRJQ0Y3-VAeSk",
        "amount": "-19.60",
        "info": "Ашан",
        "timestamp": "2020.10.21 15:22:57",
        "category_name": "Products and Supermarkets",
    },
    {
        "id": "knrZskdlKpNWGCAP",
        "amount": "-158.00",
        "info": "LC Waikiki",
        "timestamp": "2020.10.17 15:05:22",
        "category_name": "Clothes and Shoes",
    },
    {
        "id": "6VWiThpNe2MoAuHG",
        "amount": "-232.00",
        "info": "LC Waikiki",
        "timestamp": "2020.10.17 14:29:15",
        "category_name": "Clothes and Shoes",
    },
    {
        "id": "wzDXuJi3m3ntFQkw",
        "amount": "-100.00",
        "info": "roll bar Sorrymama",
        "timestamp": "2020.10.17 19:51:50",
        "category_name": "Cafes and Restaurants",
    },
    {
        "id": "o1re0JFU3sYy8jTZ",
        "amount": "-150.70",
        "info": "АТБ",
        "timestamp": "2020.10.14 19:20:41",
        "category_name": "Products and Supermarkets",
    },
    {
        "id": "gH3SNqgfxESvcEgG",
        "amount": "-80.50",
        "info": "Опалення",
        "timestamp": "2020.10.13 21:51:26",
        "category_name": "Other",
    },
    {
        "id": "47kvB2dTaJmzXqgP",
        "amount": "-194.16",
        "info": "Електроенергія",
        "timestamp": "2020.10.13 21:51:25",
        "category_name": "Other",
    },
    {
        "id": "Q3nogFANBH4wtL5L",
        "amount": "-285.78",
        "info": "Гаряча вода",
        "timestamp": "2020.10.13 21:51:25",
        "category_name": "Other",
    },
    {
        "id": "07uqFoRxWKe0WLka",
        "amount": "-72.16",
        "info": "Газ",
        "timestamp": "2020.10.13 21:51:25",
        "category_name": "Other",
    },
    {
        "id": "VWxctxe3pLZWN9gm",
        "amount": "-292.00",
        "info": "Квартплата",
        "timestamp": "2020.10.13 21:51:24",
        "category_name": "Other",
    },
]

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


const Transactions = () => {
    // mocking transactions data; todo: implement api calling
    const transactionsByDates = {}
    MOCK_TRANSACTIONS.forEach(item => {
        const transactionDate = moment(item["timestamp"], DATETIME_FORMAT).format(DATE_FORMAT)
        if (!Object.keys(transactionsByDates).includes(transactionDate)) {
            transactionsByDates[transactionDate] = []
        }
        transactionsByDates[transactionDate].push(item)
    })
    const transactions = Object.keys(transactionsByDates).map(key => ({
        transactions: transactionsByDates[key],
        date: key,
    }))
    // end mocking transaction data

    const currentDate = moment().format("ll")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.currentDate}>{currentDate}</Text>
            </View>
            <FlatList
                data={transactions}
                renderItem={renderDayTransactions}
                keyExtractor={(item) => item.date}
            />
        </View>
    )
}

export default Transactions
