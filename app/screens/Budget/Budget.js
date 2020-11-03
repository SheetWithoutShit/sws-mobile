import React, { useState } from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import Input from "@components/Inputs/Input"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { validateSavings, validateIncome } from "@utils/validators"

import styles from "./style"


const Budget = ({ navigation }) => {
    const [income, setIncome] = useState(null)
    const [saving, setSavings] = useState(null)
    const [incomeErrors, setIncomeErrors] = useState(null)
    const [savingErrors, setSavingsErrors] = useState(null)

    const validateSavingValue = () => {
        const errors = validateSavings(saving)
        setSavingsErrors(errors)
    }
    const validateIncomeValue = () => {
        const errors = validateIncome(saving)
        setIncomeErrors(errors)
    }
    const handleSubmit = () => {
        setSavingsErrors(validateSavings(saving))
        setIncomeErrors(validateIncome(income))
    }

    const isValid = income && saving && !savingErrors && !incomeErrors

    return (
        <View style={styles.container}>
            <Header
                text="Budget"
                icon={{ name: "piggy", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={styles.editContainer}>
                <Input
                    label="Income ₴"
                    keyboard="number-pad"
                    placeholder="0"
                    handleEndEditing={validateIncomeValue}
                    value={income}
                    handleChange={(value) => setIncome(value.replace(/[^0-9]]/g, ""))}
                    errors={incomeErrors}
                />
                <Input
                    label="Savings %"
                    keyboard="number-pad"
                    placeholder="0"
                    handleEndEditing={validateSavingValue}
                    value={saving}
                    handleChange={(value) => setSavings(value.replace(/[^0-9]]/g, ""))}
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
                        handlePress={handleSubmit}
                    />
                </View>
            </View>
        </View>
    )
}

export default Budget
