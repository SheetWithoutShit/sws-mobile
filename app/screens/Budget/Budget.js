import React, { useState } from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import MessageInfo from "@components/Messages/MessageInfo"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { validateSavings } from "@utils/validators"

import styles from "./style"


const BUDGET_MESSAGE = "\
In order to help cut off your spendings \
we should know your income per month and how much in the percentage of budget you want to save."

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
        <View style={styles.container}>
            <Header
                text="Budget"
                icon={{ name: "piggy", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View NumberInput={styles.editContainer}>
                <MessageInfo text={BUDGET_MESSAGE}/>
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
                <View style={styles.buttonsContainer}>
                    <Button
                        label="Cancel"
                        color="none"
                        size="small"
                        labelColor="gold"
                        labelStyle={styles.cancelButton}
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
