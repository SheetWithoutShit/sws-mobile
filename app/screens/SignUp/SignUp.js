import React, { useState } from "react"
import { View, Text } from "react-native"

import Input from "@components/Inputs/Input"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { SIGNIN_SCREEN } from "@utils/constants"
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "@utils/validators"

import styles from "./style"


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [emailErrors, setEmailErrors] = useState(null)
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmErrors, setConfirmPasswordErrors] = useState(null)

    const validatePasswordValue = () => {
        const errors = validatePassword(password)
        setPasswordErrors(errors)
    }
    const validateConfirmPasswordValue = () => {
        const errors = validateConfirmPassword(password, confirmPassword)
        setConfirmPasswordErrors(errors)
    }
    const validateEmailValue = () => {
        const errors = validateEmail(email)
        setEmailErrors(errors)
    }

    const handleSubmit = () => {
        setEmailErrors(validateEmail(email))
        setNewPasswordErrors(validatePassword(password))
        setConfirmPasswordErrors(validateConfirmPassword(password, confirmPassword))
    }

    // email, new, confirm password shouldn't be null and errors should be empty
    const isValid = email
        && password
        && confirmPassword
        && !emailErrors
        && !passwordErrors
        && !confirmErrors
    return (
        <View style={styles.container}>
            <Header isSecondary={true} text="Sign Up"/>
            <View>
                <View>
                    <Input
                        icon={{ name: "email" }}
                        keyboard="email-address"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        placeholder="Enter an email..."
                        handleChange={(value) => setEmail(value)}
                        value={email}
                        handleEndEditing={validateEmailValue}
                        errors={emailErrors}
                    />
                    <Input
                        icon={{ name: "lock" }}
                        keyboard="password"
                        autoCompleteType="password"
                        textContentType="password"
                        placeholder="Enter new password..."
                        handleChange={(value) => setPassword(value)}
                        value={password}
                        style={styles.password}
                        secureTextEntry={true}
                        errors={passwordErrors}
                        handleEndEditing={validatePasswordValue}
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
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        size="medium"
                        label="Sign Up"
                        color={isValid ? "gold": "grey"}
                        disabled={!isValid}
                        handlePress={handleSubmit}
                    />
                    <Button color="none" handlePress={() => navigation.navigate(SIGNIN_SCREEN)}>
                        <Text style={styles.signIn}>
                            Have an account?
                            <Text style={styles.signInBold}>  Sign in.</Text>
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default SignUp
