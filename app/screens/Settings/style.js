import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
    },
    menu: {
        alignItems: "center",
    },
    button: {
        margin: 5,
    },

    // logout stuff
    logout: {
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
    logoutButton: {
        flexDirection: "row",
    },
    logoutText: {
        marginLeft: 5,
        fontFamily: FONTS.cairoBold,
        color: COLORS.black,
        fontSize: 20,
    },
})

export default styles
