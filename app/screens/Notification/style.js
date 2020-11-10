import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.black,
    },

    header: {
        fontSize: 18,
        color: COLORS.gold,
        fontFamily: FONTS.cairoRegular,
        fontWeight: "bold",
    },

    info: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.white,
        lineHeight: 20,
        textAlign: "justify",
        marginTop: 10,
    },

    baseContainer: {
        width: 320,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },

    labelActivated: {
        borderColor: COLORS.gold,
        borderRadius: 10,
        backgroundColor: COLORS.gold,
    },

    labelDeactivated: {
        borderColor: COLORS.grey,
        backgroundColor: COLORS.black,
    },

    // buttons stuff
    buttonsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    cancelButton: {
        fontSize: 16,
    },

    deactivatedText: {
        fontSize: 16,
        color: COLORS.grey,
    },

    activatedText: {
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default styles
