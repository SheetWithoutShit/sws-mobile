import React from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import {
    DELETE_ACCOUNT_SCREEN,
    EMAIL_CHANGE_SCREEN,
    PASSWORD_CHANGE_SCREEN,
} from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const Settings = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Header
                text="Settings"
                icon={{ name: "settings", color: COLORS.gold }}
                isSecondary={true}
            />
            <Button
                size="wide"
                label="Change Email"
                handlePress={() => navigation.navigate(EMAIL_CHANGE_SCREEN)}
                buttonStyle={styles.button}
            />
            <Button
                size="wide"
                label="Change Password"
                handlePress={() => navigation.navigate(PASSWORD_CHANGE_SCREEN)}
                buttonStyle={styles.button}
            />
            <Button
                size="wide"
                label="Delete an account"
                color="red"
                handlePress={() => navigation.navigate(DELETE_ACCOUNT_SCREEN)}
                buttonStyle={styles.button}
            />
            <Button
                size="wide"
                buttonStyle={styles.logoutButton}
                label="Logout"
                labelStyle={styles.logoutText}
                icon={{ name: "exit" }}
            >
            </Button>
        </View>
    )
}

export default Settings
