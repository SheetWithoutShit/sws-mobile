import { StyleSheet } from "react-native"

import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    header: {
        alignItems: "center",
    },
    currentDate: {
        fontFamily: FONTS.cairoRegular,
        color: COLORS.gold,
        fontSize: 20,
    },
    containerInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    info: {
        fontFamily: FONTS.cairoRegular,
        color: COLORS.grey,
        fontSize: 30,
        textAlign: "center",
        marginBottom: 150,
    },
})

export default styles
