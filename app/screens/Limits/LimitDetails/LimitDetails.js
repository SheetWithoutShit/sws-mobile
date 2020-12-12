import React from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import PieProgress from "@components/Charts/PieProgress/PieProgress"
import TransactionsList from "@components/App/TransactionsList/TransactionsList"
import { LIMIT_EDIT_SCREEN } from "@utils/constants"
import { getProgressColor } from "@utils/misc";

import styles from "./style"


const MOCK_TRANSACTIONS = [
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
        "info": "Ашан",
        "timestamp": "2020.10.17 15:05:22",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "wzDXuJi3m3ntFQkw",
        "amount": "-100.00",
        "info": "Something cool",
        "timestamp": "2020.10.17 19:51:50",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
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
        "info": "АТБ",
        "timestamp": "2020.10.13 21:51:26",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "47kvB2dTaJmzXqgP",
        "amount": "-194.16",
        "info": "Сільпо",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "Q3nogFANBH4wtL5L",
        "amount": "-285.78",
        "info": "Сільпо",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
    },
    {
        "id": "07uqFoRxWKe0WLka",
        "amount": "-72.16",
        "info": "Сільпо",
        "timestamp": "2020.10.13 21:51:25",
        "cashback": "0.58",
        "category_name": "Products & Supermarkets",
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


const LimitDetails = ({ route, navigation }) => {
    const { limit } = route.params

    const navigateEditForm = () => {
        navigation.navigate(LIMIT_EDIT_SCREEN, {
            isEdit: true,
            limit: limit,
        })
    }

    const primaryText = `${parseFloat(limit.spent).toFixed(2)} ₴`
    const secondaryText = `${limit.balance} ₴`

    return (
        <View style={styles.container}>
            <Header text={limit.name}/>
            <PieProgress
                progress={limit.spent / limit.balance}
                primaryText={primaryText}
                secondaryText={secondaryText}
                handleTextPress={navigateEditForm}
            />
            <TransactionsList transactions={MOCK_TRANSACTIONS}/>
        </View>
    )
}

export default LimitDetails
