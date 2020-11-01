import React from "react"
import { View, Text } from "react-native"

import Icon from "@utils/icon"

import styles from "./style"


const Header = ({ isSecondary, text, icon, style }) => {
    return (
        <View style={[
            styles.header,
            isSecondary && styles.secondaryHeader,
            style,
        ]}>
            {icon && <Icon name={icon.name} width={icon.width} height={icon.height} color={icon.color}/>}
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default Header
