import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.black,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
    categoryPlaceholder: {
        fontFamily: FONTS.cairoRegular,
        fontWeight: "normal",
    },
})

export default styles
