import React from "react"
import { Text, View, TouchableOpacity } from "react-native"

import { TOUCH_OPACITY } from "@utils/constants"
import styles from "./style"


const ColorButton = ({ size, color, style, label, disabled, handlePress, children }) => {
    return (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={[
                styles.colorButton,
                styles[size],
                styles[color],
                disabled && styles.colorButtonDisabled,
                style,
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            {children && <View style={{ marginRight: 10 }}>{children}</View>}
            <Text style={styles.colorButtonText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default ColorButton
