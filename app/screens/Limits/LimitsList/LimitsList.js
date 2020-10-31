import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"

import COLORS from "@utils/colors"
import Icon from "@utils/icon"
import { LIMIT_EDIT_SCREEN, TOUCH_OPACITY } from "@utils/constants"

import styles from "./style"


// TODO: replace with API data
const MOCK_LIMITS = [
    {
        "id": 1,
        "amount": "5000.00",
        "spend": "800.00",
        "name": "Products and Supermarkets",
        "info": "Goods and services in supermarkets and specialty stores selling food and beverages",
    },
    {
        "id": 3,
        "amount": "300.00",
        "spend": "800.00",
        "name": "Cinema",
        "info": "Cinema services and goods, rent and purchase of goods in related stores",
    },
    {
        "id": 4,
        "amount": "1250.00",
        "spend": "800.00",
        "name": "Clothes and Shoes",
        "info": "Goods and services in specialized shops of clothes, footwear",
    },
    {
        "id": 2,
        "amount": "500.00",
        "spend": "800.00",
        "name": "Taxi",
        "info": "Taxi services",
    },
]


const LimitsList = ({ navigation }) => {

    const renderLimit = ({ item }) => {
        const amount = parseFloat(item.amount)
        const spend = parseFloat(item.spend)
        return (
            <TouchableOpacity
                activeOpacity={TOUCH_OPACITY}
                key={item.id}
                style={[
                    styles.limit,
                    amount < spend && styles.limitRed,
                ]}
                onPress={() => navigation.navigate(LIMIT_EDIT_SCREEN, { isEdit: true })}
            >
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.category}>{item.name.replace("and", "&")}</Text>
            </TouchableOpacity>
        )
    }

    const AddLimit = () => (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={styles.addButtonContainer}
            onPress={() => navigation.navigate(LIMIT_EDIT_SCREEN, { isEdit: false })}
        >
            <Text style={styles.addButtonText}>Add Limit</Text>
        </TouchableOpacity>
    )

    if (!MOCK_LIMITS.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="speedometer" height="18" width="24" color={COLORS.green}/>
                <Text style={styles.title}> Limits</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.limitsContainer}
                data={MOCK_LIMITS}
                renderItem={renderLimit}
                keyExtractor={(item) => item.id}
                ListFooterComponent={AddLimit}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default LimitsList
