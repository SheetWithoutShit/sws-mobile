import React from "react"
import { View, ActivityIndicator, Platform } from "react-native"

import COLORS from "@utils/colors"

import styles from "./style"


const INDICATOR_SIZE = Platform.select({
    ios: "large",
    android: 70,
})

const LoadingIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={INDICATOR_SIZE}
                color={COLORS.white}
            />
        </View>
    )
}

export default LoadingIndicator
