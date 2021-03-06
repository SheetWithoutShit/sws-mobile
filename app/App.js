import React, { useState } from "react"
import { AppLoading } from "expo"
import { NavigationContainer } from "@react-navigation/native"
import { Text, StyleSheet } from "react-native"
import { loadAsync as fontLoadAsync } from "expo-font"
import { Asset } from "expo-asset"
import { useSelector, useDispatch } from "react-redux"
import * as SecureStore from "expo-secure-store"

import Routes from "@navigation/Routes"
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator"
import Snackbar from "@components/Snackbar/Snackbar"
import { getUser } from "@api/user"
import { getBudget } from "@api/budget"
import { loginUser } from "@redux/user/actions"
import { getTodayReport } from "@api/transactions"
import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"
import { ICONS_PATHS } from "@utils/constants"


const styles = StyleSheet.create({
    wordmark: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
        fontSize: 20,
        color: COLORS.gold,
        paddingBottom: 5,
    },
})

const App = () => {
    const dispatch = useDispatch()

    const [ready, setReady] = useState(false)
    const requestInProgress = useSelector(state => state.app.isLoading)
    const message = useSelector(state => state.app.message)

    const prepareApp = async () => {
        await Promise.all([loadUser(), loadAssets()])
    }

    const isUserLoggedIn = async () => {
        const authJson = await SecureStore.getItemAsync("auth")
        if (!authJson) return false

        const { access_token_exp: accessTokenExpire } = JSON.parse(authJson)
        const now = Date.now() / 1000

        return accessTokenExpire > now
    }

    const loadUser = async () => {
        const userLoggedIn = await isUserLoggedIn()
        if (!userLoggedIn) return

        dispatch(loginUser())
        dispatch(getUser())
        dispatch(getBudget())
        dispatch(getTodayReport())
    }

    const loadAssets = async () => {
        const fontAssets = fontLoadAsync({
            [FONTS.cairoBold]: require("./assets/fonts/Cairo-Bold.ttf"),
            [FONTS.cairoRegular]: require("./assets/fonts/Cairo-Regular.ttf"),
        })
        const imageAssets = Object.values(ICONS_PATHS).map(imagePath => {
            return Asset.fromModule(imagePath).downloadAsync()
        })

        await Promise.all([fontAssets, ...imageAssets])
    }

    if (!ready) {
        return (
            <AppLoading
                startAsync={prepareApp}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        )
    }
    return (
        <NavigationContainer>
            <Routes />
            {message && <Snackbar text={message.text} level={message.level}/>}
            {requestInProgress && <LoadingIndicator/>}
            <Text style={styles.wordmark}>Spentless</Text>
        </NavigationContainer>
    )
}

export default App
