import React, { useState } from "react"
import { View, Text } from "react-native"
import { useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import EmailInput from "@components/Inputs/EmailInput"

import { changeEmail } from "@api/auth"
import { SETTINGS_SCREEN } from "@utils/constants"
import { validateEmail } from "@utils/validators"
import globalStyles from "@utils/styles"


const EmailChange = ({ navigation }) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState(null)
    const [emailErrors, setEmailErrors] = useState(null)

    const handleEmailChange = (value) => {
        setEmail(value)

        const errors = validateEmail(email)
        setEmailErrors(errors)
    }

    const isValid = email && !emailErrors

    const handleSubmit = () => {
        dispatch(changeEmail(email))
            .then((success) => {
                if (success) navigation.navigate(SETTINGS_SCREEN)
            })
    }

    return (
        <View style={globalStyles.container}>
            <Header
                text="Change email"
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.info}>
                    In order to change the email, you need to put below a new email,
                    submit a changing request, and follow up instruction that we will send to your old email.
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

export default EmailChange
