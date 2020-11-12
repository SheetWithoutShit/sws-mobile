import React, { useState } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { validateSavings } from "@utils/validators"

import globalStyles from "@utils/styles"


const Budget = ({ navigation }) => {
    const [income, setIncome] = useState(null)
    const [savings, setSavings] = useState(null)
    const [savingErrors, setSavingsErrors] = useState(null)

    const handleSavingsChange = (value) => {
        setSavings(value)

        const errors = validateSavings(value)
        setSavingsErrors(errors)
    }

    const isValid = income && savings && !savingErrors

    return (
        <View style={globalStyles.container}>
            <Header
                text="Budget"
                icon={{ name: "piggy", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.info}>
                    In order to help cut off your spending
                    we should know your income per month and how much
                    in the percentage of budget you want to save.
                </Text>
                <NumberInput
                    label="Income ₴"
                    value={income}
                    handleChange={(value) => setIncome(value)}
                />
                <NumberInput
                    label="Savings %"
                    value={savings}
                    handleChange={handleSavingsChange}
                    errors={savingErrors}
                />
                <View style={globalStyles.formButtonsContainer}>
                    <Button
                        label="Cancel"
                        color="none"
                        size="small"
                        labelColor="gold"
                        labelStyle={globalStyles.formCancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="Update"
                        color={isValid ? "gold" : "grey"}
                        size="small"
                        disabled={!isValid}
                    />
                </View>
            </View>
        </View>
    )
}

export default Budget
