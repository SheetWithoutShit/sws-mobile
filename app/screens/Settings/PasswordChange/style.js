import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
    },

    password: {
        marginTop: 15,
    },

    // buttons stuff
    buttonsContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    cancelButton: {
        fontSize: 16,
    },
})

export default styles
