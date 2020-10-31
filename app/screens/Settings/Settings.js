import React from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import ColorButton from "@components/Buttons/ColorButton"
import { DELETE_ACCOUNT_SCREEN } from "@utils/constants"
import Icon from "@utils/icon"

import styles from "./style"


const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                text="Settings"
                icon={{ name: "settings" }}
                isSecondary={true}
            />
            <View style={styles.menu}>
                <ColorButton
                    size="large"
                    label="Change Email"
                    color="green"
                    style={{ margin: 5 }}
                />
                <ColorButton
                    size="large"
                    label="Change Password"
                    color="green"
                    style={{ margin: 5 }}
                />
                <ColorButton
                    size="large"
                    label="Delete an account"
                    color="red"
                    handlePress={() => navigation.navigate(DELETE_ACCOUNT_SCREEN)}
                    style={{ margin: 5 }}
                />
            </View>
            <View style={styles.logout}>
                <ColorButton
                    size="large"
                    label="Logout"
                    color="green"
                >
                    <Icon name="exit"/>
                </ColorButton>
            </View>
        </View>
    )
}

export default Settings
