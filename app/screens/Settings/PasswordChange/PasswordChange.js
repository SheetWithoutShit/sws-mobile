import React, { useState } from "react"
import { View } from "react-native"
import { useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import PasswordInput from "@components/Inputs/PasswordInput"
import { changePassword } from "@api/auth"
import { validatePassword, validateConfirmPassword } from "@utils/validators"
import { SETTINGS_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const PasswordChange = ({ navigation }) => {
    const dispatch = useDispatch()

    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const [newPasswordErrors, setNewPasswordErrors] = useState(null)
    const [confirmErrors, setConfirmPasswordErrors] = useState(null)

    // Old, new, confirm password shouldn't be null and errors should be empty
    const isValid = oldPassword
        && newPassword
        && confirmPassword
        && !newPasswordErrors
        && !confirmErrors

    // TODO: fix discard changes effect
    // const hasUnsavedChanges = oldPassword || newPassword || confirmPassword
    // useEffect(
    //     () => discardChangesEffect(navigation, hasUnsavedChanges),
    //     [navigation, hasUnsavedChanges],
    // )

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

    const handleSubmit = () => {
        dispatch(changePassword(oldPassword, newPassword))
            .then((success) => {
                if (success) navigation.navigate(SETTINGS_SCREEN)
            })
    }

    return (
        <View style={globalStyles.container}>
            <Header
                text="Change password"
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <PasswordInput
                    placeholder="Enter old password..."
                    handleChange={(value) => setOldPassword(value)}
                    value={oldPassword}
                    style={styles.password}
                    visibleIcon={true}
                />
                <PasswordInput
                    placeholder="Enter new password..."
                    handleChange={handleNewPasswordChange}
                    value={newPassword}
                    style={styles.password}
                    errors={newPasswordErrors}
                    visibleIcon={true}
                />
                <PasswordInput
                    placeholder="Confirm password..."
                    handleChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    style={styles.password}
                    errors={confirmErrors}
                    visibleIcon={false}
                />
                <View style={globalStyles.formButtonsContainer}>
                    <Button
                        label="Cancel"
                        size="small"
                        color="none"
                        labelColor="gold"
                        labelStyle={globalStyles.formCancelButton}
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
