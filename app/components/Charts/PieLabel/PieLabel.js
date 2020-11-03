import React from "react"
import { View, Text, Dimensions } from "react-native"

import Button from "@components/Buttons/Button"

import styles from "./style"


const PieLabel = ({ primaryText, secondaryText, handleTextPress }) => {
    const deviceWidth = Dimensions.get("window").width
    const labelWidth = styles.labelsContainer.width
    const labelPosition = { left: deviceWidth / 2 - labelWidth / 2 }

    return (
        <View style={[styles.labelsContainer, labelPosition]}>
            <Button color="none" handlePress={handleTextPress}>
                {primaryText && <Text style={[styles.label, styles.primaryText]}>{primaryText}</Text>}
                {secondaryText && <Text style={[styles.label, styles.secondaryText]}>{secondaryText}</Text>}
            </Button>
        </View>
    )
}

export default PieLabel
