import React, { useState } from "react"
import { View, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { PROFILE_SCREEN } from "@utils/constants"
import { validateSavings } from "@utils/validators"
import { updateBudget } from "@api/budget"

import globalStyles from "@utils/styles"


const Budget = ({ navigation }) => {
    const dispatch = useDispatch()

    const { income: userIncome, savings: userSavings } = useSelector(state => state.user)
    const [income, setIncome] = useState(userIncome)

    const [savings, setSavings] = useState(userSavings)
    const [savingErrors, setSavingsErrors] = useState(null)

    // TODO: fix effect
    // const hasUnsavedChanges = income !== userIncome || savings !== userSavings
    // useEffect(
    //     () => discardChangesEffect(navigation, hasUnsavedChanges),
    //     [navigation, hasUnsavedChanges],
    // )

    const handleSavingsChange = (value) => {
        const newValue = parseInt(value)
        setSavings(!isNaN(newValue) ? newValue : null)

        const errors = validateSavings(value)
        setSavingsErrors(errors)
    }
    const handleIncomeChange = (value) => {
        const newValue = parseInt(value)
        setIncome(!isNaN(newValue) ? newValue : null)
    }

    const handleSubmit = async () => {
        dispatch(updateBudget(income, savings))
            .then((success) => {
                if (success) navigation.navigate(PROFILE_SCREEN)
            })
    }

    const isValid = income !== null
        && savings !== null
        && !savingErrors
        && (income !== userIncome || savings !== userSavings)

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
                    value={income !== null ? income.toString() : null}
                    handleChange={handleIncomeChange}
                />
                <NumberInput
                    label="Savings %"
                    value={savings !== null ? savings.toString() : null}
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
                        handlePress={handleSubmit}
                    />
                </View>
            </View>
        </View>
    )
}

export default Budget
