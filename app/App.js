import React from "react"
import { registerRootComponent } from "expo"
import { NavigationContainer } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native"

import { useFonts } from "expo-font"
import Routes from "@navigation/Routes"
import COLORS from "@utils/colors"


const styles = StyleSheet.create({
    app: {
        height: "100%",
    },
    wordmark: {
        textAlign: "center",
        fontFamily: "CairoBold",
        fontSize: 16,
        color: COLORS.green,
        backgroundColor: COLORS.lightGreen,
    },
})


const App = () => {
    const [fontsLoaded] = useFonts({
        "CairoBold": require("./assets/fonts/Cairo-Bold.ttf"),
        "CairoRegular": require("./assets/fonts/Cairo-Regular.ttf"),
    })

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
