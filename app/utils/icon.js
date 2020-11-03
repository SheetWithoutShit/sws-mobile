import React from "react"

import SvgUri from "react-native-svg-uri"


const ICONS_FILES = {
    "person": require("@assets/icons/person.svg"),
    "trending-up": require("@assets/icons/trending-up.svg"),
    "speedometer": require( "@assets/icons/speedometer.svg"),
    "settings": require( "@assets/icons/settings.svg"),
    "exit": require( "@assets/icons/exit.svg"),
    "monobank": require( "@assets/icons/monobank.svg"),
    "piggy": require( "@assets/icons/piggy.svg"),
    "notifications": require( "@assets/icons/notifications.svg"),
    "success": require( "@assets/icons/success.svg"),
    "question": require( "@assets/icons/question.svg"),
    "email": require( "@assets/icons/email.svg"),
    "lock": require( "@assets/icons/lock.svg"),
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
