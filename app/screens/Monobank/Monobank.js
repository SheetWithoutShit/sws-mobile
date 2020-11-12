import React, { useState } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Input from "@components/Inputs/Input"
import Button from "@components/Buttons/Button"
import Link from "@components/Link/Link"

import globalStyles from "@utils/styles"
import styles from "./style"


const Monobank = ({ navigation }) => {
    const [activationCode, setActivationCode] = useState(null)

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
                        value={activationCode}
                        handleChange={(value) => setActivationCode(value)}
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
                            color={activationCode ? "gold" : "grey"}
                            size="small"
                            disabled={!activationCode}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Monobank
