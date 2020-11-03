import React, { useState } from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import Input from "@components/Inputs/Input"
import { validatePassword, validateConfirmPassword } from "@utils/validators"

import styles from "./style"


const PasswordChange = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [newPasswordErrors, setNewPasswordErrors] = useState(null)
    const [confirmErrors, setConfirmPasswordErrors] = useState(null)

    const validateNewPasswordValue = () => {
        const errors = validatePassword(newPassword)
        setNewPasswordErrors(errors)
    }
    const validateConfirmPasswordValue = () => {
        const errors = validateConfirmPassword(newPassword, confirmPassword)
        setConfirmPasswordErrors(errors)
    }
    const handleSubmit = () => {
        setNewPasswordErrors(validatePassword(newPassword))
        setConfirmPasswordErrors(validateConfirmPassword(newPassword, confirmPassword))
    }

    // Old, new, confirm password shouldn't be null and errors should be empty
    const isValid = oldPassword
        && newPassword
        && confirmPassword
        && !newPasswordErrors
        && !confirmErrors

    return (
        <View style={styles.container}>
            <Header
                text="Change password"
                isSecondary={true}
            />
            <View>
                <Input
                    icon={{ name: "lock" }}
                    keyboard="password"
                    autoCompleteType="password"
                    textContentType="password"
                    placeholder="Enter old password..."
                    handleChange={(value) => setOldPassword(value)}
                    value={oldPassword}
                    style={styles.password}
                    secureTextEntry={true}
                />
                <Input
                    icon={{ name: "lock" }}
                    keyboard="password"
                    autoCompleteType="password"
                    textContentType="password"
                    placeholder="Enter new password..."
                    handleChange={(value) => setNewPassword(value)}
                    value={newPassword}
                    style={styles.password}
                    secureTextEntry={true}
                    errors={newPasswordErrors}
                    handleEndEditing={validateNewPasswordValue}
                />
                <Input
                    icon={{ name: "lock" }}
                    keyboard="password"
                    autoCompleteType="password"
                    textContentType="password"
                    placeholder="Confirm password..."
                    handleChange={(value) => setConfirmPassword(value)}
                    value={confirmPassword}
                    style={styles.password}
                    secureTextEntry={true}
                    handleEndEditing={validateConfirmPasswordValue}
                    errors={confirmErrors}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        label="Cancel"
                        size="small"
                        color="none"
                        labelColor="gold"
                        labelStyle={styles.cancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="Submit"
                        size="small"
                        color={isValid ? "gold" : "grey"}
                        disabled={!isValid}
                        handlePress={handleSubmit}
                    />
                </View>
            </View>

        </View>
    )
}

export default PasswordChange
