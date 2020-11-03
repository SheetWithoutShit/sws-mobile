import React from "react"
import { View, Text, Dimensions } from "react-native"
import { ProgressCircle } from "react-native-svg-charts"

import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"

import styles from "./style"


const PIE_STROKE_WIDTH = 40
const PIE_CORNER_RADIUS = 5
const PIE_ANGLE_COEFFICIENT = 0.75
const PIE_START_ANGLE = -Math.PI * PIE_ANGLE_COEFFICIENT
const PIE_END_ANGLE = Math.PI * PIE_ANGLE_COEFFICIENT


const ProgressPie = ({ progress, spend, balance, handleTextPress }) => {
    const progressColor = progress < 1 ? COLORS.gold : COLORS.red

    const deviceWidth = Dimensions.get("window").width
    const labelWidth = styles.labelsContainer.width
    const labelPosition = { left: deviceWidth / 2 - labelWidth / 2 }

    return (
        <View>
            <ProgressCircle
                style={styles.progressPie}
                progress={progress}
                progressColor={progressColor}
                backgroundColor={COLORS.darkGold}
                strokeWidth={PIE_STROKE_WIDTH}
                cornerRadius={PIE_CORNER_RADIUS}
                startAngle={PIE_START_ANGLE}
                endAngle={PIE_END_ANGLE}
            />
            <View style={[styles.labelsContainer, labelPosition]}>
                <Button color="none" onPress={handleTextPress}>
                    <Text style={[styles.label, styles.primaryText]}>{spend} ₴</Text>
                    <Text style={[styles.label, styles.secondaryText]}>{balance} ₴</Text>
                </Button>
            </View>
        </View>
    )
}

export default ProgressPie
