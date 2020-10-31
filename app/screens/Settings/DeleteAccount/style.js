import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGreen,
        alignItems: "center",
    },

    // buttons stuff
    buttonsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
})

export default styles
