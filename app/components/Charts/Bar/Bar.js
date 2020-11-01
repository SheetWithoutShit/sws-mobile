import React from "react"
import { BarChart } from "react-native-svg-charts"

import COLORS from "@utils/colors"
import styles from "./style"


const Y_MIN = 0
const SPACING_INNER = 0.25

const Bar = ({ data }) => {
    return (
        <BarChart
            style={styles.bar}
            yMin={Y_MIN}
            yMax={Math.max(...data)}
            data={data}
            svg={{ fill: COLORS.black }}
            spacingInner={SPACING_INNER}
        />
    )
}

export default Bar
