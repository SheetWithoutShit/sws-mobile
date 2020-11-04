import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
        width: "100%",
    },
    button: {
        margin: 5,
    },

    // logout stuff
    logoutButton: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
    logoutText: {
        marginLeft: 5,
    },
})

export default styles
