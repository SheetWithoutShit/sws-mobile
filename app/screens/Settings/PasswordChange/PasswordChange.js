import React, { useState } from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import PasswordInput from "@components/Inputs/PasswordInput"
import { validatePassword, validateConfirmPassword } from "@utils/validators"

import styles from "./style"


const PasswordChange = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [newPasswordErrors, setNewPasswordErrors] = useState(null)
    const [confirmErrors, setConfirmPasswordErrors] = useState(null)

    const handleNewPasswordChange = (value) => {
        setNewPassword(value)

        const errors = validatePassword(value)
        setNewPasswordErrors(errors)
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value)

        const errors = validateConfirmPassword(newPassword, value)
        setConfirmPasswordErrors(errors)
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
                <PasswordInput
                    placeholder="Enter old password..."
                    handleChange={(value) => setOldPassword(value)}
                    value={oldPassword}
                    style={styles.password}
                />
                <PasswordInput
                    placeholder="Enter new password..."
                    handleChange={handleNewPasswordChange}
                    value={newPassword}
                    style={styles.password}
                    errors={newPasswordErrors}
                />
                <PasswordInput
                    placeholder="Confirm password..."
                    handleChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    style={styles.password}
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
                    />
                </View>
            </View>

        </View>
    )
}

export default PasswordChange
