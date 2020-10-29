import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGreen,
    },
    menu: {
        width: 285,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    smallButton: {
        height: 85,
        width: 85,
        backgroundColor: COLORS.green,
        margin: 5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    largeButton: {
        width: 275,
        height: 110,
        backgroundColor: COLORS.green,
        margin: 5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    balance: {
        fontSize: 44,
        fontFamily: FONTS.cairoBold,
        color: COLORS.white,
    },
})

export default styles
