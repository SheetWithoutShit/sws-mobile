import React from "react"
import { View } from "react-native"
import { ProgressCircle } from "react-native-svg-charts"

import PieLabel from "@components/Charts/PieLabel/PieLabel"
import COLORS from "@utils/colors"
import { getProgressColor } from "@utils/misc";

import styles from "./style"


const PIE_STROKE_WIDTH = 40
const PIE_CORNER_RADIUS = 5
const PIE_ANGLE_COEFFICIENT = 0.75
const PIE_START_ANGLE = -Math.PI * PIE_ANGLE_COEFFICIENT
const PIE_END_ANGLE = Math.PI * PIE_ANGLE_COEFFICIENT


const PieProgress = ({ progress, primaryText, secondaryText, handleTextPress }) => {

    return (
        <View>
            <ProgressCircle
                style={styles.progressPie}
                progress={progress}
                progressColor={getProgressColor(progress)}
                backgroundColor={COLORS.darkGold}
                strokeWidth={PIE_STROKE_WIDTH}
                cornerRadius={PIE_CORNER_RADIUS}
                startAngle={PIE_START_ANGLE}
                endAngle={PIE_END_ANGLE}
            />
            <PieLabel
                primaryText={primaryText}
                secondaryText={secondaryText}
                handleTextPress={handleTextPress}
            />
        </View>
    )
}

export default PieProgress
