import React, { useState } from "react"
import { View, Text } from "react-native"
import { useDispatch } from "react-redux"
import * as SecureStore from "expo-secure-store"

import PasswordInput from "@components/Inputs/PasswordInput"
import EmailInput from "@components/Inputs/EmailInput"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { signUp, signIn } from "@api/auth"
import { setMessage, setLoading } from "@redux/app/actions"
import { setLoggedIn } from "@redux/user/actions"
import { SIGNIN_SCREEN } from "@utils/constants"
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "@utils/validators"

import globalStyles from "@utils/styles"
import styles from "./style"


const SignUp = ({ navigation }) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

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

    const handleSignIn = async () => {
        const { data: body } = await signIn(email.toLowerCase(), password)
        await SecureStore.setItemAsync("auth", JSON.stringify(body.data))
        dispatch(setLoggedIn(true))
    }

    const handleSignUp = async () => {
        dispatch(setLoading(true))
        try {
            const { data: body } = await signUp(email.toLowerCase(), password)
            dispatch(setMessage({ text: body.message, level: "success" }))

            await handleSignIn()
        } catch (error) {
            const { message } = error.response.data
            dispatch(setMessage({ text: message, level: "error" }))
        } finally {
            dispatch(setLoading(false))
        }
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
