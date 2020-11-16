import React, { useState } from "react"
import { registerRootComponent, AppLoading } from "expo"
import { NavigationContainer } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native"
import { loadAsync as fontLoadAsync } from "expo-font"
import { Asset } from "expo-asset"

import Routes from "@navigation/Routes"
import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"
import { ICONS_PATHS } from "@utils/constants"


const styles = StyleSheet.create({
    app: {
        height: "100%",
        backgroundColor: COLORS.black,
        paddingTop: 35,
    },
    wordmark: {
        textAlign: "center",
        fontFamily: FONTS.cairoBold,
        fontSize: 20,
        color: COLORS.gold,
        paddingBottom: 5,
    },
})

const App = () => {
    const [ready, setReady] = useState(false)

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
                startAsync={loadAssets}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        )
    }
    return (
        <View style={styles.app}>
            <NavigationContainer>
                <Routes />
                <Text style={styles.wordmark}>Spentless</Text>
            </NavigationContainer>
        </View>
    )
}

registerRootComponent(App)
