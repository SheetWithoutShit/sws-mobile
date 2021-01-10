import React, { useState } from "react"
import { View } from "react-native"

import Switch from "@components/Switch/Switch"
import { REPORT_DAILY_SCREEN, REPORT_MONTH_SCREEN } from "@utils/constants"
import CalendarReport from "@screens/Reports/CalendarReport/CalendarReport"
import Button from "@components/Buttons/Button"

import styles from "./style"


const ReportHeader = ({ screen, navigation }) => {
    const handleSwitch = () => {
        const nextScreen = screen === "Day" ? REPORT_MONTH_SCREEN : REPORT_DAILY_SCREEN
        navigation.navigate(nextScreen)
    }
    const [calendar, setCalendar] = useState(null)
    return (
        <View style={styles.reportHeader}>
            <Switch
                leftText="Daily"
                rightText="Month"
                handleSwitch={handleSwitch}
                enabled={screen === "Day"}
            />
            <Button
                size="extraSmall"
                color="gold"
                handlePress={() => setCalendar(true)}
                buttonStyle={styles.button}
                icon={{ name: "calendar" }}
            />
            {calendar && <CalendarReport
                visible={true}
                handleClose={() => setCalendar(null)}
            />}
        </View>
    )
}

export default ReportHeader
