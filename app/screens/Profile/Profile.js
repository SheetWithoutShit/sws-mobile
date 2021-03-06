import React from "react"
import { View, Text } from "react-native"
import { useSelector } from "react-redux"

import Header from "@components/Header/Header"
import COLORS from "@utils/colors"
import Icon from "@utils/icon"
import Stepper from "@components/Stepper/Stepper"
import Button from "@components/Buttons/Button"
import { SETTINGS_SCREEN, BUDGET_SCREEN, MONOBANK_SCREEN, NOTIFICATION_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const Profile = ({ navigation }) => {
    const {
        firstName,
        lastName,
        monobankEnabled,
        savings,
        income,
        telegramId,
    } = useSelector(state => state.user)
    const budgetSetup = savings !== null && income !== null
    const telegramSetup = telegramId !== null

    const dynamicSteps = [
        {
            label: "Monobank access",
            passed: monobankEnabled,
            event: () => navigation.navigate(MONOBANK_SCREEN),
        },
        {
            label: "Set up budget",
            passed: budgetSetup,
            event: () => navigation.navigate(BUDGET_SCREEN),
        },
        {
            label: "Enable telegram bot",
            passed: telegramSetup,
            event: () => navigation.navigate(NOTIFICATION_SCREEN),
        },
    ]
    dynamicSteps.sort((a) => a.passed ? -1 : 1)
    const passedDynamicSteps = dynamicSteps.reduce((acc, x) => acc + x.passed, 0)

    const steps = [
        { label: "Registered", passed: true, event: () => {} },
        ...dynamicSteps,
        { label: "Ready to use!", passed: passedDynamicSteps === dynamicSteps.length, event: () => {} },
    ]

    return (
        <View style={globalStyles.container}>
            <Header
                text={(firstName && lastName) ? `${firstName} ${lastName}` : "Hey, Stranger"}
                icon={{ name: "person", height: "24", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={styles.menu}>
                <Button
                    size="largeSquare"
                    color="gold"
                    handlePress={() => navigation.navigate(MONOBANK_SCREEN)}
                    buttonStyle={styles.button}
                    label="Monobank"
                    labelStyle={styles.buttonText}
                    icon={{ name: "monobank" }}
                >
                    <View style={[
                        styles.label,
                        monobankEnabled && styles.labelSuccess,
                    ]}>
                        <Icon name={monobankEnabled ? "success": "question"}/>
                    </View>
                </Button>
                <Button
                    size="largeSquare"
                    color="gold"
                    handlePress={() => navigation.navigate(BUDGET_SCREEN)}
                    buttonStyle={styles.button}
                    label="Budget"
                    labelStyle={styles.buttonText}
                    icon={{ name: "piggy" }}
                >
                    <View style={[
                        styles.label,
                        budgetSetup && styles.labelSuccess,
                    ]}>
                        <Icon name={budgetSetup ? "success": "question"}/>
                    </View>
                </Button>
                <Button
                    size="largeSquare"
                    color="gold"
                    handlePress={() => navigation.navigate(NOTIFICATION_SCREEN)}
                    buttonStyle={styles.button}
                    label="Notifications"
                    labelStyle={styles.buttonText}
                    icon={{ name: "notifications" }}
                >
                    <View style={[
                        styles.label,
                        telegramSetup && styles.labelSuccess,
                    ]}>
                        <Icon name={telegramSetup ? "success": "question"}/>
                    </View>
                </Button>
                <Button
                    size="largeSquare"
                    color="black"
                    handlePress={() => navigation.navigate(SETTINGS_SCREEN)}
                    buttonStyle={styles.button}
                >
                    <Icon name="settings" color={COLORS.gold}/>
                    <Text style={[styles.buttonText, styles.settingsText]}>Settings</Text>
                </Button>
            </View>
            <View style={styles.stepper}>
                <Stepper
                    stepPosition={steps.reduce((acc, x) => acc + x.passed, 0)}
                    steps={steps}
                />
            </View>
        </View>
    )
}

export default Profile
