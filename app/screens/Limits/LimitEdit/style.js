import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.lightGreen,
    },

    // header stuff
    header: {
        height: 150,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: FONTS.cairoBold,
        fontSize: 32,
        color: COLORS.green,
    },

    // edit form stuff
    editContainer: {
        marginTop: 20,
        width: 275,
    },
    label: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.black,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
        color: COLORS.black,
    },
    categoryPlaceholder: {
        fontFamily: FONTS.cairoRegular,
        fontWeight: "normal",
    },
    info: {
        fontFamily: FONTS.cairoRegular,
        fontSize: 16,
        color: COLORS.black,
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
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 75,
        height: 40,
        borderRadius: 10,
    },
    okButton: {
        backgroundColor: COLORS.green,
    },
    okButtonDisabled: {
        backgroundColor: COLORS.grey,
    },
    buttonText: {
        fontFamily: FONTS.cairoBold,
        fontSize: 16,
    },
    cancelText: {
        color: COLORS.black,
    },
    okText: {
        fontSize: 20,
        color: COLORS.white,
    },
})

export default styles
