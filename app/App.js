import React from "react"
import { registerRootComponent } from "expo"
import { NavigationContainer } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native"

import { useFonts } from "expo-font"
import Routes from "@navigation/Routes"
import COLORS from "@utils/colors"
import FONTS from "@utils/fonts"


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
    const [fontsLoaded] = useFonts({
        [FONTS.cairoBold]: require("./assets/fonts/Cairo-Bold.ttf"),
        [FONTS.cairoRegular]: require("./assets/fonts/Cairo-Regular.ttf"),
    })

    // TODO: implement loading screen
    if (!fontsLoaded) return <View><Text>Loading...</Text></View>
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
