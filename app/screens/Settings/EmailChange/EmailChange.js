import React, { useState } from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import MessageInfo from "@components/Messages/MessageInfo"
import Button from "@components/Buttons/Button"
import EmailInput from "@components/Inputs/EmailInput"
import { validateEmail } from "@utils/validators"

import styles from "./style"


const EMAIL_CHANGE_MESSAGE = "\
In order to change the email, you need to put below a new email, \
submit a changing request, and follow up instruction that we will send to your old email."

const EmailChange = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [emailErrors, setEmailErrors] = useState(null)

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(email)
        setEmailErrors(errors)
    }

    const isValid = email && !emailErrors

    return (
        <View style={styles.container}>
            <Header
                text="Change email"
                isSecondary={true}
            />
            <MessageInfo text={EMAIL_CHANGE_MESSAGE}/>
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

export default EmailChange
