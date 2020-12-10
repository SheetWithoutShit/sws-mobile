import React, { useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { getLimits } from "@api/limits"
import { LIMIT_DETAILS_SCREEN, LIMIT_EDIT_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const LIMIT_COLORS = [
    "#D9BB6E",
    "#D4B16B",
    "#D0A767",
    "#CB9D64",
    "#C79361",
    "#C2895D",
    "#BE7F5A",
    "#B97557",
    "#B56B53",
    "#B06150",
]

const getLimitColor = (balance, spent) => {
    if (spent === 0) return LIMIT_COLORS[0]

    const percentage = Math.min((spent * 100.0) / balance, 100)
    const index = Math.ceil(percentage / 10) - 1
    return LIMIT_COLORS[index]
}


const Limits = ({ navigation }) => {
    const dispatch = useDispatch()

    const { limits } = useSelector(state => state.limits)

    useEffect(() => {
        dispatch(getLimits())
    }, [getLimits])

    const renderLimit = ({ item }) => {
        const balance = parseFloat(item.balance)
        const spent = parseFloat(item.spent)
        const limitColor = getLimitColor(balance, spent)

        return (
            <Button
                size="largeSquare"
                buttonStyle={[styles.limit, { backgroundColor: limitColor }]}
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

    if (!limits.length) {
        return (
            <View style={[globalStyles.container, styles.messageContainer]}>
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
                data={limits}
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
