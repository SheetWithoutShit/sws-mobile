import React from "react"
import { View } from "react-native"

import ColorButton from "@components/Buttons/ColorButton"
import { REPORT_DAILY_SCREEN, REPORT_MONTH_SCREEN } from "@utils/constants"

import styles from "./style"


const ReportHeader = ({ screen, navigation }) => {
    return (
        <View style={styles.reportHeader}>
            <ColorButton
                label="Day"
                size="small"
                color={screen === "Day" ? "black": "gold"}
                disabled={screen === "Day"}
                handlePress={() => navigation.navigate(REPORT_DAILY_SCREEN)}
                style={styles.reportHeaderButton}
            />
            <ColorButton
                label="Month"
                size="small"
                color={screen === "Month" ? "black": "gold"}
                disabled={screen === "Month"}
                handlePress={() => navigation.navigate(REPORT_MONTH_SCREEN)}
                style={styles.reportHeaderActiveButton}
            />
        </View>
    )
}

export default ReportHeader
