import React, { useState } from "react"
import { View, Text } from "react-native"

import { Calendar } from "react-native-calendars"

import Modal from "@components/Modal/Modal"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"
import styles from "./style"


const CALENDAR_CONFIGS = {
    backgroundColor: COLORS.black,
    calendarBackground: COLORS.black,
    textSectionTitleColor: COLORS.darkGold,
    textSectionTitleDisabledColor: COLORS.darkGold,
    selectedDayBackgroundColor: COLORS.darkGold,
    selectedDayTextColor: COLORS.darkGold,
    todayTextColor: COLORS.red,
    dayTextColor: COLORS.gold,
    arrowColor: COLORS.gold,
    monthTextColor: COLORS.white,
    indicatorColor: COLORS.white,
    textDayFontFamily: FONTS.CairoRegular,
    textMonthFontFamily: FONTS.CairoRegular,
    textDayHeaderFontFamily: FONTS.CairoRegular,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
}


const CalendarReport = ({ visible, handleClose }) => {
    const [day, setDay] = useState("")

    return (
        <Modal visible={visible} handleClose={handleClose}>
            <View >
                <Calendar
                    style={styles.calendar}
                    theme={CALENDAR_CONFIGS}
                    markingType={"period"}
                    onDayPress={(day) => {
                        setDay(day.dateString + "")
                    }}
                    markedDates={{
                        "2020-12-17": { color: COLORS.gold, textColor: COLORS.black },
                    }}
                    markedDates={c}
                />
                <Text>{day}</Text>
            </View>
        </Modal>
    )
}

export default CalendarReport
