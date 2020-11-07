import React from "react"
import { View } from "react-native"

import Input from "@components/Inputs/Input"


const PasswordInput = ({
    value,
    placeholder,
    errors,
    style,
    handleChange,
}) => {
    return (
        <View>
            <Input
                icon={{ name: "lock" }}
                keyboard="password"
                autoCompleteType="password"
                textContentType="password"
                placeholder={placeholder}
                handleChange={handleChange}
                value={value}
                style={style}
                secureTextEntry={true}
                errors={errors}
            />
        </View>
    )
}

export default PasswordInput
