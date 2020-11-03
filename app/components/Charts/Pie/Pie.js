import React from "react"
import { View, Text, Dimensions } from "react-native"
import { PieChart } from "react-native-svg-charts"

import COLORS from "@utils/colors"

import styles from "./style"


const Pie = ({ data, activeIndex, text }) => {
    const deviceWidth = Dimensions.get("window").width
    const labelWidth = styles.labelsContainer.width
    const segments = data.map((item, index) => {
        const outerRadius = index === activeIndex ? "100%" : "70%"
        const innerRadius = index === activeIndex ? "70%" : "80%"
        return {
            key: item.key,
            value: item.value,
            svg: { fill: index === activeIndex ? COLORS.gold : COLORS.darkGold },
            arc: { outerRadius, innerRadius },
        }
    })

    return (
        <View>
            <PieChart
                style={styles.pie}
                data={segments}
            />
            <View
                style={[
                    styles.labelsContainer,
                    { left: deviceWidth / 2 - labelWidth / 2 },
                ]}>
                <Text style={styles.label}>{text}%</Text>
            </View>
        </View>
    )
}

export default Pie
