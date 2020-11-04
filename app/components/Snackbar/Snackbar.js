import React, { useState } from "react"
import { Text } from "react-native"

import Icon from "@utils/icon"
import Button from "@components/Buttons/Button"

import styles from "./style"


const SNACKBAR_DURATIONS = {
    "short": 3000,
    "long": 10000,
    "infinity": 0,
}
const SNACKBAR_ICONS = {
    "success": <Icon name="success-circle"/>,
    "error": <Icon name="error-circle"/>,
}


const Snackbar = ({ visible, text, level, duration, handlePress }) => {
    const [hide, setHide] = useState(false)

    const hideTime = SNACKBAR_DURATIONS[duration]
    if (hideTime) {
        setTimeout(() => setHide(true), hideTime)
    }

    if (!visible || hide) return null
    return (
        <Button
            size="wide"
            color={level === "success" ? "darkGreen" : "red"}
            buttonStyle={styles.snackbar}
            handlePress={handlePress}
        >
            {SNACKBAR_ICONS[level]}
            <Text style={styles.text}>{text}</Text>
        </Button>
    )
}

export default Snackbar
