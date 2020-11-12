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
                    1. Follow the monobank authorization API link: <Link url="https://api.monobank.ua/"/>{"\n"}
                    2. On the screen click on the barcode.{"\n"}
                    3. It will take you to the monobank application in order to login into.{"\n"}
                    4. Accept the authorization API token.{"\n"}
                    5. Copy token from the section 'My token' and put it below.{"\n"}
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
