import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center",
    },

    // limit items stuff
    limitsContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
    },
    limit: {
        margin: 5,
    },
    balance: {
        fontFamily: FONTS.cairoBold,
        fontSize: 28,
        color: COLORS.black,
        textAlign: "center",
        textAlignVertical: "bottom",
        height: 50,
        lineHeight: 8,
    },
    category: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 14,
        color: COLORS.black,
        textAlign: "center",
        height: 30,
        lineHeight: 18,
    },
    addButton: {
        marginTop: 20,
    },
})

export default styles
