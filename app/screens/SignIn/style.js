import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    input: {
        marginTop: 15,
    },
    passwordOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    passwordOptionsText: {
        fontSize: 16,
        fontFamily: FONTS.cairoRegular,
        color: COLORS.gold,
        marginLeft: 5,
    },
    rememberMe: {
        flex: 1,
    },

    buttonsContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    signUp: {
        flexDirection: "row",
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.gold,
        marginTop: 5,
    },
    signUpBold: {
        fontFamily: FONTS.cairoBold,
    },
})


export default styles
