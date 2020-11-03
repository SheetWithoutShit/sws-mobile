import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    labelsContainer: {
        position: "absolute",
        width: 200,
        top: 105,
    },
    label: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
    },
    primaryText: {
        color: COLORS.gold,
        fontSize: 36,
        height: 45,
    },
    secondaryText: {
        color: COLORS.white,
        fontSize: 20,
        height: 25,
    },
})

export default styles
