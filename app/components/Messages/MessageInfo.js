import React from "react"
import { Text } from "react-native"

import styles from "./style"


const MessageInfo = ({ text, style }) => {
    return (
        <Text style={[styles.message, style]}>
            {text}
        </Text>
    )
}

export default MessageInfo
