import React, { useState } from "react"
import { View, TouchableOpacity } from "react-native"

import Input from "@components/Inputs/Input"
import Icon from "@utils/icon"
import { TOUCH_OPACITY } from "@utils/constants"

import styles from "./style"


const PasswordInput = ({
    value,
    placeholder,
    errors,
    style,
    handleChange,
    visibleIcon,
}) => {
    const [show, setShow] = useState(false)
    return (
        <View>
            {visibleIcon
                && <TouchableOpacity
                    activeOpacity={TOUCH_OPACITY}
                    style={[styles.icon, styles.visibilityIcon]}
                    onPress={() => setShow(!show)}
                >
                    <Icon name={show ? "visible-off": "visible"}/>
                </TouchableOpacity>
            }
            <Input
                icon={{ name: "lock" }}
                keyboard={show ? "password" : "default"}
                autoCompleteType="password"
                textContentType="password"
                placeholder={placeholder}
                handleChange={handleChange}
                value={value}
                style={style}
                secureTextEntry={!show}
                errors={errors}
            />
        </View>
    )
}

export default PasswordInput
