import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.black,
    },

    // edit form stuff
    editContainer: {
        width: 280,
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
