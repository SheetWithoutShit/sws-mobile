import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"

import Header from "@components/Header/Header"
import ColorButton from "@components/Buttons/ColorButton"
import MessageInfo from "@components/Messages/MessageInfo"
import COLORS from "@utils/colors"
import { LIMIT_DETAILS_SCREEN, LIMIT_EDIT_SCREEN, TOUCH_OPACITY } from "@utils/constants"

import styles from "./style"


// TODO: replace with API data
const MOCK_LIMITS = [
    {
        "id": 1,
        "balance": "5000.00",
        "spend": "800.00",
        "name": "Products and Supermarkets",
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
        "name": "Clothes and Shoes",
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
const EMPTY_LIMITS_MESSAGE = "\t\t\tIf you want to limit your spending for some \
category you can set it here and receives\
an appropriate notification if the limit was exceeded. \
Let's start with your first limit."


const Limits = ({ navigation }) => {

    const renderLimit = ({ item }) => {
        const balance = parseFloat(item.balance)
        const spend = parseFloat(item.spend)
        return (
            <TouchableOpacity
                activeOpacity={TOUCH_OPACITY}
                key={item.id}
                style={[
                    styles.limit,
                    balance < spend && styles.limitRed,
                ]}
                onPress={() => navigation.navigate(LIMIT_DETAILS_SCREEN, { limit: item })}
            >
                <Text style={styles.balance}>{balance}</Text>
                <Text style={styles.category}>{item.name.replace("and", "&")}</Text>
            </TouchableOpacity>
        )
    }

    const AddLimit = () => (
        <ColorButton
            size="medium"
            color="gold"
            label="Add Limit"
            handlePress={() => navigation.navigate(LIMIT_EDIT_SCREEN, { isEdit: false })}
        />
    )

    if (!MOCK_LIMITS.length) {
        return (
            <View style={styles.container}>
                <MessageInfo text={EMPTY_LIMITS_MESSAGE} style={{ marginBottom: 10 }}/>
                <AddLimit/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header
                icon={{ name: "speedometer", height: "18", width: "24", color: COLORS.gold }}
                text="Limits"
            />
            <FlatList
                contentContainerStyle={styles.limitsContainer}
                data={MOCK_LIMITS}
                renderItem={renderLimit}
                keyExtractor={(item) => item.id}
                ListFooterComponent={AddLimit}
                showsVerticalScrollIndicator={false}
                ListFooterComponentStyle={styles.addButton}
            />
        </View>
    )
}

export default Limits
