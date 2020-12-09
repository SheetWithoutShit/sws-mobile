import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    snackbar: {
        position: "absolute",
        width: "90%",
        left: "5%",
        top: 40,
        flexDirection: "row",
        borderRadius: 5,
        padding: 12,
        alignItems: "center",
    },
    success: {
        backgroundColor: COLORS.darkGreen,
    },
    error: {
        backgroundColor: COLORS.red,
    },
    text: {
        flex: 1,
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 10,
        textAlign: "justify",
    },
})

export default styles
