import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { TOUCH_OPACITY } from "@utils/constants"
import styles from "./style"


const TextButton = ({ size, style, label, disabled, handlePress }) => {
    return (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={[
                styles.textButton,
                styles[size],
                style,
            ]}
            disabled={disabled}
            onPress={handlePress}
        >
            <Text style={styles.textButtonLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton
