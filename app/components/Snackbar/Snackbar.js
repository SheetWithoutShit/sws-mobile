import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"

import Icon from "@utils/icon"
import { TOUCH_OPACITY } from "@utils/constants"
import { setMessage } from "@redux/app/actions"

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


const Snackbar = ({ text, level, duration = "infinity" }) => {
    const dispatch = useDispatch()
    const hideMessage = () => dispatch(setMessage(null))

    const hideTime = SNACKBAR_DURATIONS[duration]
    if (hideTime) setTimeout(hideMessage, hideTime)

    return (
        <TouchableOpacity
            style={[
                styles.snackbar,
                level === "error" && styles.error,
                level === "success" && styles.success,
            ]}
            activeOpacity={TOUCH_OPACITY}
            onPress={hideMessage}
        >
            {SNACKBAR_ICONS[level]}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Snackbar
