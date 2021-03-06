import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Link from "@components/Link/Link"
import COLORS from "@utils/colors"
import Switch from "@components/Switch/Switch"
import { updateNotifications } from "@api/user"
import { getTelegramInvitation } from "@api/user"

import globalStyles from "@utils/styles"
import styles from "./style"


const Notification = () => {
    const dispatch = useDispatch()

    const {
        notificationsEnabled: userNotificationsEnabled,
        telegramInvitation,
        telegramId,
    } = useSelector(state => state.user)

    const [notificationsEnabled, setNotificationsEnabled] = useState(userNotificationsEnabled)
    const telegramBotEnabled = telegramId !== null

    const handleNotificationSwitch = async () => {
        dispatch(updateNotifications(!notificationsEnabled))
            .then((success) => {
                if (success) setNotificationsEnabled(!notificationsEnabled)
            })
    }
    useEffect(() => {
        const now = Date.now() / 1000
        if (!telegramInvitation) {
            dispatch(getTelegramInvitation())
        } else if (now > telegramInvitation.expiredAt) {
            dispatch(getTelegramInvitation())
        }
    }, [dispatch])

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
                    link: <Link url={telegramInvitation?.link || ""} text="https://t.me/SpentlessBot"/>.
                    It will take you to our telegram  bot and there you should use the command
                    "/start" that will register your membership in our system. SpentlessBot
                    will be sending you notifications about new appeared transactions and
                    alerts for exceeded limits.
                </Text>
                <View style={[
                    styles.telegramContainer,
                    telegramBotEnabled ? styles.labelActivated : styles.labelDeactivated,
                ]}>
                    <Text style={telegramBotEnabled ? styles.activatedText : styles.deactivatedText}>
                        Telegram bot is {telegramBotEnabled ? "activated" : "deactivated"}
                    </Text>
                </View>
                <Switch
                    rightText="Disabled"
                    leftText="Enabled"
                    enabled={notificationsEnabled}
                    handleSwitch={handleNotificationSwitch}
                />
            </View>
        </View>
    )
}

export default Notification
