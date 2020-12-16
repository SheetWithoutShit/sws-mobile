import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        color: COLORS.gold,
        fontFamily: FONTS.cairoBold,
    },

    monobankTokenContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    monobankToken: {
        width: 250,
    },

    trashStyle: {
        height: "auto",
        width: "auto",
    },
})

export default styles
