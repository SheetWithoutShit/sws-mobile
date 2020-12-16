import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import Icon from "@utils/icon"
import { TOUCH_OPACITY } from "@utils/constants"

import styles from "./style"


const Header = ({ isSecondary, text, icon, style, iconEvent }) => {
    return (
        <View style={[
            styles.header,
            isSecondary && styles.secondaryHeader,
            style,
        ]}>
            {icon
                && <TouchableOpacity onPress={iconEvent} activeOpacity={TOUCH_OPACITY}>
                    <Icon name={icon.name} width={icon.width} height={icon.height} color={icon.color}/>
                </TouchableOpacity>
            }
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default Header
