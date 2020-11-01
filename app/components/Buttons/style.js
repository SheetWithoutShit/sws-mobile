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
    gold: {
        backgroundColor: COLORS.gold,
    },
    red: {
        backgroundColor: COLORS.red,
    },
    black: {
        backgroundColor: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.gold,
    },
    grey: {
        backgroundColor: COLORS.grey,
    },

    // color button stuff
    colorButton: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    colorButtonText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 20,
        color: COLORS.black,
    },

    // text button stuff
    textButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    textButtonLabel: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.gold,
    },

    // icon button stuff
    iconButton: {
        height: 85,
        width: 85,
        backgroundColor: COLORS.gold,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default styles
