import React, { useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { getProgressColor } from "@utils/misc";
import { getLimits } from "@api/limits"
import { LIMIT_DETAILS_SCREEN, LIMIT_EDIT_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const Limits = ({ navigation }) => {
    const dispatch = useDispatch()

    const { limits } = useSelector(state => state.limits)

    useEffect(() => {
        dispatch(getLimits())
    }, [dispatch])

    const renderLimit = ({ item }) => {
        const balance = parseFloat(item.balance)
        const spent = parseFloat(item.spent)
        const limitColor = getProgressColor(spent / balance)

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
