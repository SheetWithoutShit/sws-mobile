import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.gold,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.gold,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.white,
    },
    dropdownPlaceholder: {
        fontFamily: FONTS.cairoRegular,
        color: COLORS.grey,
    },
})

export default styles
