import React from "react"
import { View, Alert } from "react-native"
import { useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import { setLoggedIn } from "@redux/user/actions"
import COLORS from "@utils/colors"
import {
    DELETE_ACCOUNT_SCREEN,
    EMAIL_CHANGE_SCREEN,
    PASSWORD_CHANGE_SCREEN,
} from "@utils/constants"

import globalStyles from "@utils/styles"
import styles from "./style"


const Settings = ({ navigation }) => {
    const dispatch = useDispatch()

    const handleLogoutPress = () => Alert.alert(
        "Are you sure?",
        "Are you sure you want to sign out from Spentless?",
        [
            { text: "Cancel", style: "default" },
            { text: "YES", style: "destructive", onPress: () => dispatch(setLoggedIn(false)) },
        ],
        { cancelable: true },
    )

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
                handlePress={handleLogoutPress}
                icon={{ name: "exit" }}
            >
            </Button>
        </View>
    )
}

export default Settings
