import React, { useState } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Input from "@components/Inputs/Input"
import Button from "@components/Buttons/Button"
import Link from "@components/Link/Link"

import styles from "./style"


const Monobank = ({ navigation }) => {
    const [activationCode, setActivationCode] = useState(null)

    return (
        <View style={styles.container}>
            <Header
                text="monobank"
                isSecondary={true}
            />
            <Text style={styles.header}>
                How to get activation token?
            </Text>
            <Text style={styles.info}>
                1. Follow the link: <Link url="https://api.monobank.ua/" />{"\n"}
                2.1. Using computer: scan the barcode{"\n"}
                2.2 Using smartphone: click on the barcode{"\n"}
                3. It will take you to the monobank application.{"\n"}
                4. Log into and confirm the activation.{"\n"}
                5. Activate and insert the token.{"\n"}
            </Text>
            <View style={styles.editContainer}>
                <Input
                    placeholder="Enter activation code..."
                    secureTextEntry={true}
                    value={activationCode}
                    handleChange={(value) => setActivationCode(value)}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        label="Cancel"
                        color="none"
                        size="small"
                        labelColor="gold"
                        labelStyle={styles.cancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="Submit"
                        color={activationCode ? "gold" : "grey"}
                        size="small"
                        disabled={!activationCode}
                    />
                </View>
            </View>
        </View>
    )
}

export default Monobank
