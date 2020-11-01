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
                color={screen === "Day" ? "black": "gold"}
                disabled={screen === "Day"}
                style={styles.reportHeaderButton}
            />
            <ColorButton
                label="Month"
                size="small"
                color={screen === "Month" ? "black": "gold"}
                disabled={screen === "Month"}
                style={styles.reportHeaderActiveButton}
            />
        </View>
    )
}

export default ReportHeader
