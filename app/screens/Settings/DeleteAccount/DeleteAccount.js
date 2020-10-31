import React from "react"
import { View } from "react-native"

import Header from "@components/Header/Header"
import MessageInfo from "@components/Messages/MessageInfo"
import ColorButton from "@components/Buttons/ColorButton"
import TextButton from "@components/Buttons/TextButton"

import styles from "./style"


const DELETE_MESSAGE = "\t\t\tYou can delete your Spentless account at any time. \
If you change your mind, you might not be able to recover it. \
You will lose all the data and content in that account. \
\n\t\t\tAre you sure?"

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
                    <TextButton
                        label="Cancel"
                        size="small"
                        handlePress={() => navigation.goBack()}
                    />
                    <ColorButton
                        label="YES"
                        size="small"
                        color="red"
                    />
                </View>
            </View>

        </View>
    )
}

export default DeleteAccount
