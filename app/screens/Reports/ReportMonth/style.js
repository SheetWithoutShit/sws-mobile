import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    info: {
        alignItems: "center",
        margin: 20,
    },
    secondaryText: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 20,
        color: COLORS.white,
        lineHeight: 26,
    },
    primaryText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 28,
        color: COLORS.gold,
        lineHeight: 36,
    },

    // pagination stuff
    dot: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: COLORS.grey,
        width: 10,
        height: 10,
    },
    activeDot: {
        backgroundColor: COLORS.gold,
    },
    pagination: {
        position: "absolute",
        bottom: 0,
    },
})

export default styles
