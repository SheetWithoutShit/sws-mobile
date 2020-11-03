import React from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import MessageInfo from "@components/Messages/MessageInfo"
import Button from "@components/Buttons/Button"

import styles from "./style"


const DELETE_MESSAGE = "You can delete your Spentless account at any time. \
If you change your mind, you might not be able to recover it. \
You will lose all the data and content in that account. \
\nAre you sure?"

const DeleteAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                text="Delete an account"
                isSecondary={true}
            />
            <View>
                <MessageInfo text={DELETE_MESSAGE}/>
                <View style={styles.buttonsContainer}>
                    <Button
                        label="Cancel"
                        size="small"
                        color="none"
                        labelColor="gold"
                        labelStyle={styles.cancelButton}
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
