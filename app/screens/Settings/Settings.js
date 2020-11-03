import React from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import Icon from "@utils/icon"
import {
    DELETE_ACCOUNT_SCREEN,
    EMAIL_CHANGE_SCREEN,
    PASSWORD_CHANGE_SCREEN,
} from "@utils/constants"

import styles from "./style"


const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                text="Settings"
                icon={{ name: "settings", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={styles.menu}>
                <Button
                    size="large"
                    label="Change Email"
                    handlePress={() => navigation.navigate(EMAIL_CHANGE_SCREEN)}
                    buttonStyle={styles.button}
                />
                <Button
                    size="large"
                    label="Change Password"
                    handlePress={() => navigation.navigate(PASSWORD_CHANGE_SCREEN)}
                    buttonStyle={styles.button}
                />
                <Button
                    size="large"
                    label="Delete an account"
                    color="red"
                    handlePress={() => navigation.navigate(DELETE_ACCOUNT_SCREEN)}
                    buttonStyle={styles.button}
                />
            </View>
            <View style={styles.logout}>
                <Button size="large" buttonStyle={styles.logoutButton}>
                    <Icon name="exit" color={COLORS.black} />
                    <Text style={styles.logoutText}>Logout</Text>
                </Button>
            </View>
        </View>
    )
}

export default Settings