import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.black,
    },

    info: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.white,
        lineHeight: 24,
        textAlign: "justify",
    },

    // form stuff
    formContainer: {
        width: 280,
        alignItems: "center",
    },
    formButtonsContainer: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    formCancelButton: {
        fontSize: 16,
    },
})

export default styles
