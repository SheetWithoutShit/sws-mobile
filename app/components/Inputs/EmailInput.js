import React from "react"

import Input from "@components/Inputs/Input"


const EmailInput = ({
    value,
    errors,
    style,
    handleChange,
}) => {
    return (
        <Input
            icon={{ name: "email" }}
            keyboard="email-address"
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholder="Enter an email..."
            handleChange={handleChange}
            value={value}
            errors={errors}
            style={style}
        />
    )
}

export default EmailInput
