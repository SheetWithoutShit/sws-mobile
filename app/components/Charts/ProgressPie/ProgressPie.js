import React from "react"
import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import { ProgressCircle } from "react-native-svg-charts"

import { TOUCH_OPACITY } from "@utils/constants"
import COLORS from "@utils/colors"

import styles from "./style"


const STROKE_WIDTH = 50
const CORNER_RADIUS = 5

const ProgressPie = ({ progress, spend, balance, handleTextPress }) => {
    const progressColor = progress < 1 ? COLORS.gold : COLORS.red

    const deviceWidth = Dimensions.get("window").width
    const labelWidth = styles.labelsContainer.width

    return (
        <View>
            <ProgressCircle
                style={styles.pie}
                progress={progress}
                progressColor={progressColor}
                backgroundColor={COLORS.darkGold}
                strokeWidth={STROKE_WIDTH}
                cornerRadius={CORNER_RADIUS}
            />
            <View
                style={[
                    styles.labelsContainer,
                    // eslint-disable-next-line
                    { left: deviceWidth / 2 - labelWidth / 2 },
                ]}>
                <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    onPress={handleTextPress}
                >
                    <Text style={[styles.label, styles.spend]}>{spend} ₴</Text>
                    <Text style={[styles.label, styles.balance]}>{balance} ₴</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProgressPie
