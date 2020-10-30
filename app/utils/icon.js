import React from "react"

import SvgUri from "react-native-svg-uri"


const ICONS_FILES = {
    "person": require("@assets/icons/person.svg"),
    "trending-up": require("@assets/icons/trending-up.svg"),
    "speedometer": require( "@assets/icons/speedometer.svg"),
}

const Icon = ({ width, height, name, color }) => {
    const iconFile = ICONS_FILES[name]
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
