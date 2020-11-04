import React from "react"
import { View } from "react-native"
import { PieChart } from "react-native-svg-charts"

import PieLabel from "@components/Charts/PieLabel/PieLabel"
import COLORS from "@utils/colors"

import styles from "./style"


const Pie = ({ data, activeIndex, primaryText, secondaryText, handlePressText }) => {
    const segments = data.map((item, index) => {
        const outerRadius = index === activeIndex ? "100%" : "70%"
        const innerRadius = index === activeIndex ? "70%" : "85%"
        return {
            key: item.key,
            value: parseFloat(item.value),
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
            <PieLabel
                primaryText={primaryText}
                secondaryText={secondaryText}
                handlePressText={handlePressText}
            />
        </View>
    )
}

export default Pie
