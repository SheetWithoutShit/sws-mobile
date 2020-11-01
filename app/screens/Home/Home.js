import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import IconButton from "@components/Buttons/IconButton"
import {
    TOUCH_OPACITY,
    TRANSACTIONS_SCREEN,
    LIMITS_SCREEN,
    PROFILE_SCREEN,
    REPORT_DAILY_SCREEN,
} from "@utils/constants"

import styles from "./style"


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <IconButton
                    icon={{ name: "person", height: "50", width: "50" }}
                    style={{ margin: 5 }}
                    color="gold"
                    handlePress={() => navigation.navigate(PROFILE_SCREEN)}
                />
                <IconButton
                    icon={{ name: "trending-up", height: "60", width: "60" }}
                    style={{ margin: 5 }}
                    color="gold"
                    handlePress={() => navigation.navigate(REPORT_DAILY_SCREEN)}
                />
                <IconButton
                    icon={{ name: "speedometer", height: "60", width: "60" }}
                    style={{ margin: 5 }}
                    color="gold"
                    handlePress={() => navigation.navigate(LIMITS_SCREEN)}
                />
                <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    style={styles.largeButton}
                    onPress={() => navigation.navigate(TRANSACTIONS_SCREEN)}
                >
                    <Text style={styles.balance}>-354.50 ₴</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home
