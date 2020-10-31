import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    pie: {
        height: 290,
    },
    labelsContainer: {
        position: "absolute",
        width: 150,
        top: 100,
    },
    label: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
    },
    spend: {
        fontSize: 36,
        height: 45,
    },
    balance: {
        fontSize: 18,
        height: 25,
    },
})

export default styles
