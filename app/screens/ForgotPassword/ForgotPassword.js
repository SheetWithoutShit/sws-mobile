import React, { useState } from "react"
import { View, Text } from "react-native"
import { useDispatch } from "react-redux"

import EmailInput from "@components/Inputs/EmailInput"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { validateEmail } from "@utils/validators"
import { resetPassword } from "@api/auth"
import { SIGNIN_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"


const ForgotPassword = ({ navigation }) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState(null)
    const [emailErrors, setEmailErrors] = useState(null)

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(value)
        setEmailErrors(errors)
    }

    const handleSubmit = () => {
        dispatch(resetPassword(email))
            .then((success) => {
                if (success) navigation.navigate(SIGNIN_SCREEN)
            })
    }

    const isValid = email && !emailErrors
    return (
        <View style={globalStyles.container}>
            <Header isSecondary={true} text="Forgot Password"/>
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.info}>
                    We just need your registered email address to send you password reset link.
                </Text>
                <EmailInput
                    handleChange={handleEmailChange}
                    value={email}
                    errors={emailErrors}
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

export default ForgotPassword
