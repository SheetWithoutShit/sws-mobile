import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    snackbar: {
        position: "absolute",
        flexDirection: "row",
        top: 0,
        borderRadius: 5,
        justifyContent: "flex-start",
        paddingLeft: 20,
    },
    text: {
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
        fontSize: 16,
        minHeight: 50,
        textAlignVertical: "center",
        marginLeft: 10,
    },
})

export default styles
