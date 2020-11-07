import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    inputLabel: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.gold,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.gold,
        height: 40,
        paddingLeft: 15,
        backgroundColor: COLORS.black,
        width: 280,
        maxWidth: 280,
    },

    inputText : {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.white,
    },
    placeholder: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.grey,
    },

    icon: {
        position: "absolute",
        zIndex: 1,
        bottom: 5,
    },
    visibilityIcon: {
        right: 0,
        top: 25,
    },
    iconInput: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderRadius: 0,
        paddingLeft: 35,
    },

    errorContainer: {
        width: 280,
        marginTop: 10,
    },
    error: {
        color: COLORS.red,
        fontFamily: FONTS.cairoRegular,
        fontSize: 14,
        lineHeight: 18,
        textAlign: "justify",
    },
})

export default styles
