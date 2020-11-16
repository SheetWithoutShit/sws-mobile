import React from "react"

import SvgUri from "react-native-svg-uri"

import { ICONS_PATHS } from "@utils/constants"


const Icon = ({ width, height, name, color }) => {
    const iconFile = ICONS_PATHS[name]
    return (
        <SvgUri
            width={width}
            height={height}
            fill={color}
            source={iconFile}
        />
    )
}

export default Icon
