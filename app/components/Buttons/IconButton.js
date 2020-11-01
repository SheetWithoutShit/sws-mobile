import React from "react"
import { TouchableOpacity } from "react-native"

import Icon from "@utils/icon"
import { TOUCH_OPACITY } from "@utils/constants"
import styles from "./style"


const IconButton = ({ color, style, disabled, handlePress, icon }) => {
    return (
        <TouchableOpacity
            activeOpacity={TOUCH_OPACITY}
            style={[
                styles.iconButton,
                styles[color],
                style,
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            <Icon name={icon.name} width={icon.width} height={icon.height} color={icon.color}/>
        </TouchableOpacity>
    )
}

export default IconButton
