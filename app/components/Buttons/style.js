import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


export const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.4,
        shadowRadius: 9,
        elevation: 5,
    },
    label: {
        fontFamily: FONTS.cairoBold,
        fontSize: 20,
    },
})

export const buttonSizes = StyleSheet.create({
    extraSmall: {
        width: 55,
        height: 50,
    },
    small: {
        width: 90,
        height: 40,
    },
    medium: {
        width: 200,
        height: 50,
    },
    wide: {
        width: "90%",
        height: 50,
    },
    square: {
        height: 85,
        width: 85,
    },
    largeSquare: {
        width: 140,
        height: 110,
    },
})

export const buttonColors = StyleSheet.create({
    gold: {
        backgroundColor: COLORS.gold,
    },
    red: {
        backgroundColor: COLORS.red,
    },
    darkGold: {
        backgroundColor: COLORS.darkGold,
    },
    black: {
        backgroundColor: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.gold,
    },
    grey: {
        backgroundColor: COLORS.grey,
    },
    darkGreen: {
        backgroundColor: COLORS.darkGreen,
    },
    none: {
        color: COLORS.gold,
    },
})

export const labelColors = StyleSheet.create({
    gold: {
        color: COLORS.gold,
    },
    black: {
        color: COLORS.black,
    },
})
