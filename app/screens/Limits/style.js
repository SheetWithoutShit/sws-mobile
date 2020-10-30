import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGreen,
        alignItems: "center",
        justifyContent: "center",
    },

    header: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: 10,
    },
    title: {
        fontFamily: FONTS.cairoBold,
        fontSize: 28,
        color: COLORS.green,
    },
    message: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 18,
        color: COLORS.black,
        lineHeight: 24,
        width: 300,
        textAlign: "justify",
    },

    // limit items stuff
    limitsContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
    },
    limitGreen: {
        width: 140,
        height: 110,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    limitRed: {
        width: 140,
        height: 110,
        backgroundColor: COLORS.red,
        borderRadius: 15,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    amountGreen: {
        fontFamily: FONTS.cairoBold,
        fontSize: 28,
        color: COLORS.white,
        height: 30,
        lineHeight: 8,
        textAlignVertical: "bottom",
    },
    category: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 14,
        color: COLORS.white,
        textAlign: "center",
        width: 90,
        height: 30,
        lineHeight: 18,
    },

    // add button stuff
    addButtonContainer: {
        width: 200,
        height: 50,
        borderRadius: 10,
        margin: 20,
        backgroundColor: COLORS.white,
        borderColor: COLORS.green,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 24,
        color: COLORS.green,
    },
})

export default styles
