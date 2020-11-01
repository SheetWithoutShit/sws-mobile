import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
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
        backgroundColor: COLORS.gold,
        borderRadius: 15,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    limitRed: {
        backgroundColor: COLORS.red,
    },
    balance: {
        fontFamily: FONTS.cairoBold,
        fontSize: 28,
        color: COLORS.black,
        height: 30,
        lineHeight: 8,
        textAlignVertical: "bottom",
    },
    category: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 14,
        color: COLORS.black,
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
