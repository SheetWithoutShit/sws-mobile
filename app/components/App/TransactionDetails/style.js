import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gold,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 15,
    },

    title: {
        fontFamily: FONTS.cairoBold,
        fontSize: 24,
        color: COLORS.black,
        height: 32,
    },
    date: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.black,
    },

    content: {
        marginTop: 15,
        marginRight: 20,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    label: {
        width: "30%",
        textAlign: "right",
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.black,
    },
    value: {
        width: "70%",
        textAlign: "center",
        backgroundColor: COLORS.black,
        fontFamily: FONTS.cairoBold,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.white,
        borderRadius: 5,
    },
})

export default styles
