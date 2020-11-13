import React from "react"
import { View, Text, TextInput, Platform } from "react-native"

import Icon from "@utils/icon"

import COLORS from "@utils/colors"
import styles from "./style"

const SELECTION_COLOR = Platform.select({
    "ios": COLORS.white,
    "android": `${COLORS.gold}50`,
})

const renderIcon = (icon) => {
    return (
        <View style={styles.icon}>
            <Icon name={icon.name} width={icon.width} height={icon.height} color={icon.color}/>
        </View>
    )
}

const renderErrors = (errors) => {
    return (
        <View style={styles.errorContainer}>
            {errors.map((error, index) => <Text key={index} style={styles.error}>* {error}</Text>)}
        </View>
    )
}

const Input = ({
    label,
    keyboard,
    value,
    placeholder,
    handleChange,
    style,
    icon,
    autoCompleteType,
    disabled,
    textContentType,
    secureTextEntry,
    errors,
}) => {
    return (
        <>
            <View>
                {label && <Text style={styles.inputLabel}>{label}</Text>}
                {icon && renderIcon(icon)}
                <TextInput
                    style={[
                        styles.input,
                        icon && styles.iconInput,
                        !value ? styles.placeholder : styles.inputText,
                        style,
                    ]}
                    keyboardType={keyboard}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                    placeholderTextColor={styles.placeholder.color}
                    selectionColor={SELECTION_COLOR}
                    autoCompleteType={autoCompleteType}
                    textContentType={textContentType}
                    blurOnSubmit={true}
                    value={value}
                    editable={disabled}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {errors && renderErrors(errors)}
        </>
    )
}

export default Input
