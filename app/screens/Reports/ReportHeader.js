import React from "react"
import { View } from "react-native"

import Button from "@components/Buttons/Button"
import { REPORT_DAILY_SCREEN, REPORT_MONTH_SCREEN } from "@utils/constants"

import styles from "./style"


const ReportHeader = ({ screen, navigation }) => {
    return (
        <View style={styles.reportHeader}>
            <Button
                label="Day"
                size="small"
                color={screen === "Day" ? "black": "gold"}
                labelColor={screen === "Day" ? "gold": "black"}
                disabled={screen === "Day"}
                handlePress={() => navigation.navigate(REPORT_DAILY_SCREEN)}
                buttonStyle={styles.reportHeaderButton}
            />
            <Button
                label="Month"
                size="small"
                color={screen === "Month" ? "black": "gold"}
                labelColor={screen === "Month" ? "gold": "black"}
                disabled={screen === "Month"}
                handlePress={() => navigation.navigate(REPORT_MONTH_SCREEN)}
                buttonStyle={styles.reportHeaderActiveButton}
            />
        </View>
    )
}

export default ReportHeader
