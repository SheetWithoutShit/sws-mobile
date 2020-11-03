import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
    },

    password: {
        marginTop: 25,
    },

    buttonsContainer: {
        marginTop: 25,
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
