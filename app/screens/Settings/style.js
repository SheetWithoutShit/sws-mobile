import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
    },
    menu: {
        alignItems: "center",
    },
    logout: {
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
})

export default styles
