import React from "react"
import { View } from "react-native"

import Switch from "@components/Switch/Switch"
import { REPORT_DAILY_SCREEN, REPORT_MONTH_SCREEN } from "@utils/constants"

import styles from "./style"


const ReportHeader = ({ screen, navigation }) => {
    const handleSwitch = () => {
        const nextScreen = screen === "Day" ? REPORT_MONTH_SCREEN : REPORT_DAILY_SCREEN
        navigation.navigate(nextScreen)
    }
    return (
        <View style={styles.reportHeader}>
            <Switch
                leftText="Daily"
                rightText="Month"
                handleSwitch={handleSwitch}
                enabled={screen === "Day"}
            />
        </View>
    )
}

export default ReportHeader
