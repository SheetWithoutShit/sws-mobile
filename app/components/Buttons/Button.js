import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { TOUCH_OPACITY } from "@utils/constants"
import Icon from "@utils/icon"

import {
    styles,
    buttonSizes,
    buttonColors,
    labelColors,
} from "./style"


const renderLabel = (label, labelColor, labelStyle) => {
    return (
        <Text style={[
            styles.label,
            labelColors[labelColor],
            labelStyle,
        ]}>
            {label}
        </Text>
    )
}

const renderIcon = (icon) => {
    return (
        <Icon
            name={icon.name}
            width={icon.width}
            height={icon.height}
            color={icon.color}
        />
    )
}

const Button = ({
    icon,
    size,
    buttonStyle,
    color = "gold",
    label,
    labelColor = "black",
    labelStyle,
    handlePress,
    children,
    disabled = false,

}) => {
    return (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={[
                styles.button,
                buttonSizes[size],
                buttonColors[color],
                buttonStyle,
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            {icon && renderIcon(icon)}
            {label && renderLabel(label, labelColor, labelStyle)}
            {children}
        </TouchableOpacity>
    )
}

export default Button
