import React, { useState } from "react"
import { View, Text } from "react-native"
import CheckBox from "react-native-check-box"

import Header from "@components/Header/Header"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import EmailInput from "@components/Inputs/EmailInput"
import PasswordInput from "@components/Inputs/PasswordInput"
import { FORGOT_PASSWORD_SCREEN, SIGNUP_SCREEN } from "@utils/constants"

import styles from "./style"


const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const isValid = password && email
    return (
        <View style={styles.container}>
            <Header isSecondary={true} text="Sign In"/>
            <View>
                <View>
                    <EmailInput
                        handleChange={(value) => setEmail(value)}
                        style={styles.input}
                        value={email}
                    />
                    <PasswordInput
                        placeholder="Enter password..."
                        handleChange={(value) => setPassword(value)}
                        value={password}
                        style={styles.input}
                    />
                    <View style={styles.passwordOptions}>
                        <CheckBox
                            style={styles.rememberMe}
                            onClick={() => setRememberMe(!rememberMe)}
                            isChecked={rememberMe}
                            rightText={"Remember me"}
                            rightTextStyle={styles.passwordOptionsText}
                            checkBoxColor={COLORS.gold}
                        />
                        <Button
                            color="none"
                            labelColor="gold"
                            label="Forgot password?"
                            labelStyle={styles.passwordOptionsText}
                            handlePress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        size="medium"
                        label="Sign In"
                        color={isValid ? "gold": "grey"}
                        disabled={!isValid}
                    />
                    <Button color="none" handlePress={() => navigation.navigate(SIGNUP_SCREEN)}>
                        <Text style={styles.signUp}>
                            First time here?
                            <Text style={styles.signUpBold}>  Sign up.</Text>
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default SignIn
