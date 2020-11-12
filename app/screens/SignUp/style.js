import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    input: {
        marginTop: 15,
    },

    buttonsContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    signIn: {
        flexDirection: "row",
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.gold,
        marginTop: 5,
    },
    signInBold: {
        fontFamily: FONTS.cairoBold,
    },
})


export default styles
