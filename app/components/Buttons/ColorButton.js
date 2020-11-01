import React from "react"
import { Text, View, TouchableOpacity } from "react-native"

import { TOUCH_OPACITY } from "@utils/constants"
import COLORS from "@utils/colors"
import styles from "./style"


const ColorButton = ({ size, color, style, label, disabled, handlePress, children }) => {
    const sizeStyle = styles[size]
    const colorStyle = styles[color]

    return (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={[
                styles.colorButton,
                sizeStyle,
                colorStyle,
                style,
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            {children && <View style={{ marginRight: 10 }}>{children}</View>}
            <Text style={[
                styles.colorButtonText,
                color === "black" && { "color": COLORS.gold }, // TODO: improve logic
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default ColorButton
