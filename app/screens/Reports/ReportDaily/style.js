import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGreen,
    },

    // details stuff
    detailsContainer: {
        marginTop: 50,
        alignItems: "center",
    },
    details: {
        backgroundColor: COLORS.green,
        width: 325,
        height: 80,
        marginTop: 15,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row",
    },
    detailsText: {
        width: "40%",
        paddingLeft: 20,
        fontSize: 24,
        fontFamily: FONTS.cairoBold,
        color: COLORS.white,
    },
    detailsChart: {
        width: "60%",
    },
})

export default styles
