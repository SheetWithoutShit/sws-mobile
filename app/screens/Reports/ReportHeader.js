import React from "react"
import { View } from "react-native"

import ColorButton from "@components/Buttons/ColorButton"

import styles from "./style"


const ReportHeader = ({ screen }) => {
    return (
        <View style={styles.reportHeader}>
            <ColorButton
                label="Day"
                size="small"
                color="green"
                disabled={screen === "Day"}
                style={styles.reportHeaderButton}
            />
            <ColorButton
                label="Month"
                size="small"
                color="green"
                disabled={screen === "Month"}
                style={styles.reportHeaderButton}
            />
        </View>
    )
}

export default ReportHeader
