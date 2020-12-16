import React, { useState } from "react"
import { View, Text, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Input from "@components/Inputs/Input"
import Button from "@components/Buttons/Button"
import Link from "@components/Link/Link"
import { PROFILE_SCREEN } from "@utils/constants"
import { updateMonobankToken, deleteMonobankToken } from "@api/user"
import COLORS from "@utils/colors"

import globalStyles from "@utils/styles"
import styles from "./style"


const SECURE_MONOBANK_TOKEN = "ha-ha it's a secret"


const Monobank = ({ navigation }) => {
    const { monobankEnabled } = useSelector(state => state.user)
    const [monobankToken, setMonobankToken] = useState(monobankEnabled ? SECURE_MONOBANK_TOKEN : null)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(updateMonobankToken(monobankToken))
            .then((success) => {
                if (success) {
                    setMonobankToken(SECURE_MONOBANK_TOKEN)
                    navigation.navigate(PROFILE_SCREEN)
                }
            })
    }

    const deactivateMonobank = () => {
        dispatch(deleteMonobankToken())
            .then((success) => {
                if (success) {
                    setMonobankToken(null)
                }
            })
    }

    const handleDeactivation = () => Alert.alert(
        "Are you sure?",
        "Are you sure you want to deactivate monobank for Spentless?",
        [
            { text: "Cancel", style: "default" },
            { text: "YES", style: "destructive", onPress: deactivateMonobank },
        ],
        { cancelable: true },
    )

    return (
        <View style={globalStyles.container}>
            <Header
                text="monobank"
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Text style={styles.header}>
                    How to get activation token?
                </Text>
                <Text style={globalStyles.info}>
                    In order to visualize and make analytics, you may want to let us access your monobank.
                    You should follow the link <Link url="https://api.monobank.ua/"/>, where will be a barcode;
                    after clicking the barcode it will take you to monobank application where you can provide
                    access and copy authorization token to the input placed below.
                </Text>
                <View>
                    <View style={styles.monobankTokenContainer}>
                        <Input
                            placeholder="Enter activation code..."
                            secureTextEntry={true}
                            value={monobankToken}
                            handleChange={(value) => setMonobankToken(value)}
                            style={styles.monobankToken}
                        />
                        <Button
                            icon={{ name: "trash", color: COLORS.red }}
                            buttonStyle={styles.trashStyle}
                            color="none"
                            size="square"
                            handlePress={handleDeactivation}
                        />
                    </View>
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
                            label="Submit"
                            color={monobankToken && monobankToken !== SECURE_MONOBANK_TOKEN ? "gold" : "grey"}
                            size="small"
                            disabled={!monobankToken || monobankToken === SECURE_MONOBANK_TOKEN}
                            handlePress={handleSubmit}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Monobank
