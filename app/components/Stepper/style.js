import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.cairoRegular,
        color: COLORS.grey,
        fontSize: 11,
        width: 60,
        height: 100,
        marginTop: 5,
        lineHeight: 15,
        textAlignVertical: "top",
        textAlign: "center",
    },
    labelFinished: {
        color: COLORS.gold,
    },
})


export default styles
