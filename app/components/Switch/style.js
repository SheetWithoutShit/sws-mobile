import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        height: 50,
        width: 280,
        borderRadius: 10,
        borderColor: COLORS.grey,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    inner: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100%",
    },
    disabledText: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.grey,
    },

    innerEnabled: {
        backgroundColor: COLORS.gold,
        borderRadius: 8,
        borderColor: COLORS.gold,
        borderWidth: 2,
    },
    enabledText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
})


export default styles
