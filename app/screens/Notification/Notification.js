import React from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Link from "@components/Link/Link"
import COLORS from "@utils/colors"

import globalStyles from "@utils/styles"
import styles from "./style"


const Notification = () => {
    const isEnabled = false

    const status = isEnabled ? "activated" : "deactivated"

    return (
        <View style={globalStyles.container}>
            <Header
                text="Notification"
                icon={{ name: "notifications", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Text style={styles.header}>How to activate telegram bot?</Text>
                <Text style={globalStyles.info}>
                    In order to get notifications via telegram, you should follow the
                    link: <Link url="https://t.me/SpentlessBot"/>. It will take you to our telegram
                    bot and there you should use the command "/start" that will register your
                    membership in our system. SpentlessBot will be sending you notifications
                    about new appeared transactions and alerts for exceeded limits.
                </Text>
                <View style={[
                    styles.telegramContainer,
                    isEnabled ? styles.labelActivated : styles.labelDeactivated,
                ]}>
                    <Text style={isEnabled ? styles.activatedText : styles.deactivatedText}>
                        Telegram bot is {status}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Notification
