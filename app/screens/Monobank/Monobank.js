import React, { useState } from "react"
import { View, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"

import Header from "@components/Header/Header"
import Input from "@components/Inputs/Input"
import Button from "@components/Buttons/Button"
import Link from "@components/Link/Link"
import { updateMonobankToken } from "@api/user"

import globalStyles from "@utils/styles"
import styles from "./style"


const SECURE_MONOBANK_TOKEN = "ha-ha it's a secret"


const Monobank = ({ navigation }) => {
    const monobankEnabled = useSelector(state => state.user.monobankEnabled)
    const [monobankToken, setMonobankToken] = useState(monobankEnabled ? SECURE_MONOBANK_TOKEN : null)
    const dispatch = useDispatch()

    const handleSubmit = async () => {
        dispatch(updateMonobankToken(monobankToken))
        setMonobankToken(SECURE_MONOBANK_TOKEN)
    }

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
                    <Input
                        placeholder="Enter activation code..."
                        secureTextEntry={true}
                        value={monobankToken}
                        handleChange={(value) => setMonobankToken(value)}
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
