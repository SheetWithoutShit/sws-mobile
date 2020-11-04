import React from "react"
import { View } from "react-native"
import moment from "moment"

import Header from "@components/Header/Header"
import TransactionsList from "@components/App/TransactionsList/TransactionsList"

import styles from "./style"


const MOCK_TRANSACTIONS = [
    {
        "id": "A1vVPVMbevHyWMEW",
        "amount": "158.00",
        "info": "Від: 535129****7175",
        "timestamp": "2020.10.27 15:06:57",
        "cashback": "0.58",
        "category_name": "Other",
    },
    {
        "id": "uPA8ydjTmLWrk96g",
        "amount": "-78.00",
        "info": "Bolt",
        "timestamp": "2020.10.26 11:30:07",
        "cashback": "0.58",
        "category_name": "Taxi",
    },
    {
        "id": "oFLLRJQ0Y3-VAeSk",
        "amount": "-19.60",
        "info": "Ашан",
        "timestamp": "2020.10.21 15:22:57",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "knrZskdlKpNWGCAP",
        "amount": "-158.00",
        "info": "LC Waikiki",
        "timestamp": "2020.10.17 15:05:22",
        "cashback": "0.58",
        "category_name": "Clothes & Shoes",
    },
    {
        "id": "6VWiThpNe2MoAuHG",
        "amount": "-232.00",
        "info": "LC Waikiki",
        "timestamp": "2020.10.17 14:29:15",
        "cashback": "0.58",
        "category_name": "Clothes & Shoes",
    },
    {
        "id": "wzDXuJi3m3ntFQkw",
        "amount": "-100.00",
        "info": "roll bar Sorrymama",
        "timestamp": "2020.10.17 19:51:50",
        "cashback": "0.58",
        "category_name": "Cafes & Restaurants",
    },
    {
        "id": "o1re0JFU3sYy8jTZ",
        "amount": "-150.70",
        "info": "АТБ",
        "timestamp": "2020.10.14 19:20:41",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "gH3SNqgfxESvcEgG",
        "amount": "-80.50",
        "info": "Опалення",
        "timestamp": "2020.10.13 21:51:26",
        "cashback": "0.58",
        "category_name": "Other",
    },
    {
        "id": "47kvB2dTaJmzXqgP",
        "amount": "-194.16",
        "info": "Електроенергія",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Other",
    },
    {
        "id": "Q3nogFANBH4wtL5L",
        "amount": "-285.78",
        "info": "Гаряча вода",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Other",
    },
    {
        "id": "07uqFoRxWKe0WLka",
        "amount": "-72.16",
        "info": "Газ",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Other",
    },
    {
        "id": "VWxctxe3pLZWN9gm",
        "amount": "-292.00",
        "info": "Квартплата",
        "timestamp": "2020.10.13 21:51:24",
        "cashback": "0.58",
        "category_name": "Other",
    },
]


const Transactions = () => {
    const currentDate = moment().format("ll")
    return (
        <View style={styles.container}>
            <Header text={currentDate}/>
            <TransactionsList transactions={MOCK_TRANSACTIONS}/>
        </View>
    )
}

export default Transactions
