import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        color: COLORS.gold,
        fontFamily: FONTS.cairoBold,
    },

    labelActivated: {
        borderColor: COLORS.gold,
        backgroundColor: COLORS.gold,
    },
    labelDeactivated: {
        borderColor: COLORS.grey,
        backgroundColor: COLORS.black,
        borderWidth: 1,
    },
    telegramContainer: {
        width: 280,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 10,
    },

    deactivatedText: {
        fontSize: 16,
        color: COLORS.grey,
    },
    activatedText: {
        fontSize: 16,
        fontFamily: FONTS.cairoBold,
    },
})

export default styles
