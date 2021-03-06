import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.black,
    },
    menu: {
        width: 285,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    smallButton: {
        margin: 5,
    },
    largeButton: {
        width: 275,
        height: 110,
        margin: 5,
    },
    balance: {
        fontSize: 44,
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
    },
})

export default styles
