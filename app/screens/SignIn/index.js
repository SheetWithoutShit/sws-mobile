import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import styles from "./style"
import COLORS from "@utils/colors"


const SignIn = () => {
    // eslint-disable-next-line
    const [email, setEmail] = useState("E-mail")
    // eslint-disable-next-line
    const [password, setPassword] = useState("Password")

    return (
        <View style={styles.container}>
            <Text style={styles.positiveValue}>Sign In</Text>
            <TextInput value={email} style={styles.input} />
            <TextInput value={password} style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: COLORS.green }}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUp}>
                <Text style={{ color: COLORS.white, marginRight: 5 }}>First time here ?</Text>
                <Text style={{ color: COLORS.green }}>Sign up</Text>
            </View>
            <Text style={{ color: COLORS.green }}>Sheet without shit</Text>
        </View>
    )
}

export default SignIn
