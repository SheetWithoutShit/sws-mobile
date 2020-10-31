import React from "react"
import { View, Text, TextInput } from "react-native"

import styles from "./style"


const BorderInput = ({ label, keyboard, value, placeholder, handleChange, style }) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, style]}
                keyboardType={keyboard}
                onChangeText={handleChange}
                placeholder={placeholder}
                value={value}
            />
        </View>
    )
}

export default BorderInput
