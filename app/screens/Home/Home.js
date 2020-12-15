import React from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"

import Button from "@components/Buttons/Button"
import {
    TRANSACTIONS_SCREEN,
    LIMITS_SCREEN,
    PROFILE_SCREEN,
    REPORT_DAILY_SCREEN,
} from "@utils/constants"

import styles from "./style"


const Home = ({ navigation }) => {
    const { dailyBudget, todaySpent } = useSelector(state => state.user)
    const balance = (dailyBudget - todaySpent).toFixed(2)

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Button
                    icon={{ name: "person", height: "50", width: "50" }}
                    buttonStyle={styles.smallButton}
                    size="square"
                    handlePress={() => navigation.navigate(PROFILE_SCREEN)}
                />
                <Button
                    icon={{ name: "trending-up", height: "60", width: "60" }}
                    buttonStyle={styles.smallButton}
                    size="square"
                    handlePress={() => navigation.navigate(REPORT_DAILY_SCREEN)}
                />
                <Button
                    icon={{ name: "speedometer", height: "60", width: "60" }}
                    buttonStyle={styles.smallButton}
                    size="square"
                    handlePress={() => navigation.navigate(LIMITS_SCREEN)}
                />
                <Button
                    labelStyle={styles.balance}
                    label={`${balance} ₴`}
                    buttonStyle={styles.largeButton}
                    handlePress={() => navigation.navigate(TRANSACTIONS_SCREEN)}
                >
                </Button>
            </View>
        </View>
    )
}

export default Home
