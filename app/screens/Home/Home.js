import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import Icon from "@utils/icon"
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
                <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    style={styles.smallButton}
                    onPress={() => navigation.navigate(PROFILE_SCREEN)}
                >
                    <Icon name="person" width="50" height="50"/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    style={styles.smallButton}
                    onPress={() => navigation.navigate(REPORT_DAILY_SCREEN)}
                >
                    <Icon name="trending-up" width="60" height="60"/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    style={styles.smallButton}
                    onPress={() => navigation.navigate(LIMITS_SCREEN)}
                >
                    <Icon name="speedometer" width="60" height="60"/>
                </TouchableOpacity>
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
