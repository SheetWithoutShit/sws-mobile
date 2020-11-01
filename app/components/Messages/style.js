import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    message: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 18,
        color: COLORS.white,
        lineHeight: 24,
        width: 300,
        textAlign: "justify",
    },
})

export default styles
