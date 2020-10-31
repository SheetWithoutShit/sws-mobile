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

    // limit items stuff
    limitsContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
    },
    limit: {
        width: 140,
        height: 110,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    limitRed: {
        backgroundColor: COLORS.red,
    },
    amount: {
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
    addButton: {
        marginTop: 20,
    },
})

export default styles
