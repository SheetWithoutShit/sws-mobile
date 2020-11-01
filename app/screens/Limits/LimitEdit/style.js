import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.black,
    },

    // edit form stuff
    editContainer: {
        width: 275,
    },
    info: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.white,
        lineHeight: 20,
        textAlign: "justify",
    },
    defaultInfo: {
        color: COLORS.grey,
    },

    // buttons stuff
    buttonsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
})

export default styles
