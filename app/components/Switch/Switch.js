import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { TOUCH_OPACITY } from "@utils/constants"

import styles from "./style"


const Switch = ({ enabled, handleSwitch, leftText, rightText }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={TOUCH_OPACITY}
                onPress={handleSwitch}
                style={[styles.inner, enabled && styles.innerEnabled]}
            >
                <Text style={[styles.disabledText, enabled && styles.enabledText]}>
                    {leftText}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={TOUCH_OPACITY}
                onPress={handleSwitch}
                style={[styles.inner, !enabled && styles.innerEnabled]}
            >
                <Text style={[styles.disabledText, !enabled && styles.enabledText]}>
                    {rightText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Switch
