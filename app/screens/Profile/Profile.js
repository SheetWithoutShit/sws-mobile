import React from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import COLORS from "@utils/colors"
import Icon from "@utils/icon"
import Stepper from "@components/Stepper/Stepper"
import Button from "@components/Buttons/Button"
import { SETTINGS_SCREEN, BUDGET_SCREEN, MONOBANK_SCREEN, NOTIFICATION_SCREEN } from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const Profile = ({ navigation }) => {
    const steps = [
        { label: "Registered", event: () => {} },
        { label: "Monobank access", event: () => navigation.navigate(MONOBANK_SCREEN) },
        { label: "Set up budget", event: () => navigation.navigate(BUDGET_SCREEN) },
        { label: "Enable telegram bot", event: () => navigation.navigate(NOTIFICATION_SCREEN) },
        { label: "Ready to use!", event: () => {} },
    ]
    return (
        <View style={globalStyles.container}>
            <Header
                text="Ihor Titomir"
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
                    <View style={[styles.label, styles.labelSuccess]}>
                        <Icon name="success"/>
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
                    <View style={styles.label}>
                        <Icon name="question"/>
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
                    <View style={styles.label}>
                        <Icon name="question"/>
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
                    stepPosition={2}
                    steps={steps}
                />
            </View>
        </View>
    )
}

export default Profile
