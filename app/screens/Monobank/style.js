import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.black,
    },

    header: {
        fontSize: 18,
        color: COLORS.gold,
        fontFamily: FONTS.cairoRegular,
        fontWeight: "bold",
    },

    // edit form stuff
    editContainer: {
        width: 280,
    },
    info: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.white,
        lineHeight: 20,
        textAlign: "justify",
        marginTop: 10,
    },

    // buttons stuff
    buttonsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    cancelButton: {
        fontSize: 16,
    },
})

export default styles
