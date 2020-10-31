import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    // button size
    small: {
        width: 75,
        height: 40,
    },
    medium: {
        width: 200,
        height: 50,
    },
    large: {
        width: 325,
        height: 50,
    },

    // button colors
    green: {
        backgroundColor: COLORS.green,
    },
    red: {
        backgroundColor: COLORS.red,
    },

    // color button stuff
    colorButton: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    colorButtonDisabled: {
        backgroundColor: COLORS.grey,
    },
    colorButtonText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 20,
        color: COLORS.white,
    },

    // text button stuff
    textButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    textButtonLabel: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
})

export default styles
