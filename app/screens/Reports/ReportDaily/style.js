import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    pieContainer: {
        width: "100%",
    },

    // details stuff
    detailsContainer: {
        alignItems: "center",
    },
    detailsButton: {
        backgroundColor: COLORS.gold,
        width: 325,
        height: 80,
        marginTop: 15,
        flexDirection: "row",
    },
    detailsText: {
        width: "40%",
        paddingLeft: 20,
        fontSize: 24,
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
    },
    detailsChart: {
        width: "60%",
    },
})

export default styles
