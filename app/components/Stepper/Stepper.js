import React from "react"
import { TouchableOpacity, Text } from "react-native"
import StepIndicator from "react-native-step-indicator"

import COLORS from "@utils/colors"

import styles from "./style"


const STEPPER_CONFIGS = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,

    currentStepStrokeWidth: 0,
    stepStrokeWidth: 0,

    separatorStrokeWidth: 3,
    separatorFinishedColor: COLORS.gold,
    separatorUnFinishedColor: COLORS.grey,

    stepIndicatorFinishedColor: COLORS.gold,
    stepIndicatorUnFinishedColor: COLORS.grey,
    stepIndicatorCurrentColor: COLORS.grey,

    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,

    labelColor: COLORS.grey,
    labelSize: 8,
    currentStepLabelColor: COLORS.gold,
}


const renderLabel = ({ position, label, currentPosition }) => {
    return (
        <TouchableOpacity onPress={label.event}>
            <Text
                style={[
                    styles.label,
                    position < currentPosition && styles.labelFinished,
                ]}
            >
                {label.label}
            </Text>
        </TouchableOpacity>

    )
}

const Stepper = ({ steps, stepPosition }) => {
    return (
        <StepIndicator
            customStyles={STEPPER_CONFIGS}
            currentPosition={stepPosition}
            labels={steps}
            renderLabel={renderLabel}
        />
    )
}

export default Stepper
