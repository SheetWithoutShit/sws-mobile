import { StyleSheet } from "react-native"

import FONTS from "@utils/fonts"
import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 10,
    },
    secondaryHeader: {
        marginTop: 100,
    },
    title: {
        fontFamily: FONTS.cairoBold,
        fontSize: 24,
        color: COLORS.gold,
        marginLeft: 10,
    },
})

export default styles
