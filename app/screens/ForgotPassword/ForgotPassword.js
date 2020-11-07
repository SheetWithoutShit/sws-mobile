import React, { useState } from "react"
import { View } from "react-native"

import EmailInput from "@components/Inputs/EmailInput"
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

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(value)
        setEmailErrors(errors)
    }

    const isValid = email && !emailErrors
    return (
        <View style={styles.container}>
            <Header isSecondary={true} text="Forgot Password"/>
            <MessageInfo text={FORGOT_PASSWORD_MESSAGE}/>
            <View>
                <EmailInput
                    handleChange={handleEmailChange}
                    value={email}
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
                    />
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword
