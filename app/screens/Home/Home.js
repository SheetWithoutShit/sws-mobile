import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { TrendingUpIcon, PersonIcon, SpeedometerIcon } from "@utils/icons"
import { TOUCH_OPACITY, TRANSACTIONS_SCREEN } from "@utils/constants"

import styles from "./style"


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity activeOpacity={TOUCH_OPACITY} style={styles.smallButton}>
                    <PersonIcon/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={TOUCH_OPACITY} style={styles.smallButton}>
                    <TrendingUpIcon/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={TOUCH_OPACITY} style={styles.smallButton}>
                    <SpeedometerIcon/>
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
