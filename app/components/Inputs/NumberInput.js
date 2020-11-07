import React from "react"

import Input from "@components/Inputs/Input"


const NUMBER_PATTERN = /^-?\d*/g

const NumberInput = ({
    value,
    errors,
    style,
    handleChange,
    label,
}) => {
    return (
        <Input
            label={label}
            keyboard="number-pad"
            placeholder="0"
            value={value}
            handleChange={(value) => handleChange(value.match(NUMBER_PATTERN)[0])}
            errors={errors}
            style={style}
        />
    )
}

export default NumberInput
