import React, { useState } from "react"
import { View, Text } from "react-native"
import { useDispatch } from "react-redux"

import PasswordInput from "@components/Inputs/PasswordInput"
import EmailInput from "@components/Inputs/EmailInput"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { signUp } from "@api/auth"
import { SIGNIN_SCREEN } from "@utils/constants"
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "@utils/validators"

import globalStyles from "@utils/styles"
import styles from "./style"


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const dispatch = useDispatch()

    const [emailErrors, setEmailErrors] = useState(null)
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(null)

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(value)
        setEmailErrors(errors)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)

        const errors = validatePassword(value)
        setPasswordErrors(errors)
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value)

        const errors = validateConfirmPassword(password, value)
        setConfirmPasswordErrors(errors)
    }

    const handleSignUp = () => {
        dispatch(signUp(email.toLowerCase(), password))
    }

    // email, new, confirm password shouldn't be null and errors should be empty
    const isValid = email
        && password
        && confirmPassword
        && !emailErrors
        && !passwordErrors
        && !confirmPasswordErrors

    return (
        <View style={globalStyles.container}>
            <Header isSecondary={true} text="Sign Up"/>
            <View>
                <View style={globalStyles.formContainer}>
                    <EmailInput
                        handleChange={handleEmailChange}
                        value={email}
                        style={styles.input}
                        errors={emailErrors}
                    />
                    <PasswordInput
                        placeholder="Enter password..."
                        handleChange={handlePasswordChange}
                        value={password}
                        style={styles.input}
                        errors={passwordErrors}
                        visibleIcon={true}
                    />
                    <PasswordInput
                        placeholder="Enter confirm password..."
                        handleChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        style={styles.input}
                        errors={confirmPasswordErrors}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        size="medium"
                        label="Sign Up"
                        color={isValid ? "gold": "grey"}
                        disabled={!isValid}
                        handlePress={handleSignUp}
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
