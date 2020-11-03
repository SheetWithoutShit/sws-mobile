import React, { useState } from "react"
import { View } from "react-native"

import Input from "@components/Inputs/Input"
import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import MessageInfo from "@components/Messages/MessageInfo"
import { validateEmail } from "@utils/validators"

import styles from "./style"

const FORGOT_PASSWORD_MESSAGE = "\
We just need your registered email address to send you password reset link.\
"
const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [emailErrors, setEmailErrors] = useState(null)

    const validateEmailValue = () => {
        const errors = validateEmail(email)
        setEmailErrors(errors)
    }

    const isValid = email && !emailErrors
    return (
        <View style={styles.container}>
            <Header isSecondary={true} text="Forgot Password"/>
            <MessageInfo text={FORGOT_PASSWORD_MESSAGE}/>
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
                        handlePress={validateEmailValue}
                    />
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword
