import React from "react"

import SvgUri from "react-native-svg-uri"

export const PersonIcon = () => (
    <SvgUri
        width="50"
        height="50"
        source={require("@assets/icons/person.svg")}
    />
)
export const TrendingUpIcon = () => (
    <SvgUri
        width="60"
        height="60"
        source={require("@assets/icons/trending-up.svg")}
    />
)
export const SpeedometerIcon = () => (
    <SvgUri
        width="60"
        height="60"
        source={require("@assets/icons/speedometer.svg")}
    />
)
