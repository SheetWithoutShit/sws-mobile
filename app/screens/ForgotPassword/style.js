import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
    },

    buttonsContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    cancelButton: {
        fontSize: 16,
    },
})


export default styles
