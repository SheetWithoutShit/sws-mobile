import React from "react"
import { Text, Linking } from "react-native"

import styles from "./style"

const Link = ({ url, text }) => {
    return (
        <Text style={styles.link} onPress={() => Linking.openURL(url)}>
            {text || url}
        </Text>
    )
}

export default Link
