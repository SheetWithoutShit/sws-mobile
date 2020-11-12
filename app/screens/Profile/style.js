import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    menu: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        margin: 10,
        paddingTop: 15,
    },

    buttonText: {
        fontSize: 12,
    },
    settingsText: {
        color: COLORS.gold,
    },

    label: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: -10,
        right: -10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.grey,
    },
    labelSuccess: {
        borderColor: COLORS.gold,
    },

    stepper: {
        width: "100%",
        marginTop: 25,
    },
})


export default styles
