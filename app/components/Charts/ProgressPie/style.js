import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    progressPie: {
        height: 300,
    },
    labelsContainer: {
        position: "absolute",
        width: 150,
        top: 100,
    },
    label: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
    },
    primaryText: {
        color: COLORS.gold,
        fontSize: 32,
        height: 40,
    },
    secondaryText: {
        color: COLORS.white,
        fontSize: 20,
        height: 25,
    },
})

export default styles
