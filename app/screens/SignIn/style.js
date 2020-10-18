import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightGreen,
    },
    positiveValue: {
        color: COLORS.green,
        fontSize: 36,
    },
    input: {
        borderBottomColor: COLORS.green,
        height: 20,
        borderBottomWidth: 3,
        width: "50%",
    },
    button: {
        backgroundColor: COLORS.green,
        width: 140,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    signUp: {
        display: "flex",
        flexDirection: "row",
    },
})


export default styles
