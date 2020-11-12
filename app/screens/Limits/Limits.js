import React from "react"
import { View, Text, FlatList } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { LIMIT_DETAILS_SCREEN, LIMIT_EDIT_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


// TODO: replace with API data
const MOCK_LIMITS = [
    {
        "id": 1,
        "balance": "5000.00",
        "spend": "800.00",
        "name": "Products & Supermarkets",
        "info": "Goods and services in supermarkets and specialty stores selling food and beverages",
    },
    {
        "id": 3,
        "balance": "300.00",
        "spend": "800.00",
        "name": "Cinema",
        "info": "Cinema services and goods, rent and purchase of goods in related stores",
    },
    {
        "id": 4,
        "balance": "1250.00",
        "spend": "800.00",
        "name": "Clothes & Shoes",
        "info": "Goods and services in specialized shops of clothes, footwear",
    },
    {
        "id": 2,
        "balance": "500.00",
        "spend": "800.00",
        "name": "Taxi",
        "info": "Taxi services",
    },
]


const Limits = ({ navigation }) => {

    const renderLimit = ({ item }) => {
        const balance = parseFloat(item.balance)
        const spend = parseFloat(item.spend)
        return (
            <Button
                size="largeSquare"
                color={balance < spend ? "red": "gold"}
                buttonStyle={styles.limit}
                handlePress={() => navigation.navigate(LIMIT_DETAILS_SCREEN, { limit: item })}
            >
                <Text style={styles.balance}>{balance}</Text>
                <Text style={styles.category}>{item.name}</Text>
            </Button>
        )
    }

    const AddLimit = () => (
        <Button
            size="medium"
            label="Add Limit"
            handlePress={() => navigation.navigate(LIMIT_EDIT_SCREEN, { isEdit: false })}
        />
    )

    if (!MOCK_LIMITS.length) {
        return (
            <View style={globalStyles.container}>
                <Text style={[globalStyles.info, styles.message]}>
                    If you want to limit your spending for some
                    category you can set it here and receives
                    an appropriate notification if the limit was exceeded.
                    Let's start with your first limit.
                </Text>
                <AddLimit/>
            </View>
        )
    }
    return (
        <View style={globalStyles.container}>
            <Header
                icon={{ name: "speedometer", height: "18", width: "24", color: COLORS.gold }}
                text="Limits"
            />
            <FlatList
                contentContainerStyle={styles.limitsContainer}
                data={MOCK_LIMITS}
                renderItem={renderLimit}
                keyExtractor={(item) => item.name}
                ListFooterComponent={AddLimit}
                showsVerticalScrollIndicator={false}
                ListFooterComponentStyle={styles.addButton}
            />
        </View>
    )
}

export default Limits
