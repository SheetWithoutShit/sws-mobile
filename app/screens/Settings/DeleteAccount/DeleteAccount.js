import React from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"

import globalStyles from "@utils/styles"


const DeleteAccount = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Header
                text="Delete an account"
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.info}>
                    You can delete your Spentless account at any time.
                    If you change your mind, you might not be able to recover it.
                    You will lose all the data and content in that account.{"\n"}
                    Are you sure?
                </Text>
                <View style={globalStyles.formButtonsContainer}>
                    <Button
                        label="Cancel"
                        size="small"
                        color="none"
                        labelColor="gold"
                        labelStyle={globalStyles.formCancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="Submit"
                        size="small"
                        color="red"
                    />
                </View>
            </View>

        </View>
    )
}

export default DeleteAccount
