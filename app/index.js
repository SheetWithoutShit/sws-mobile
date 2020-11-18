import React from "react"
import { Provider } from "react-redux"
import { registerRootComponent } from "expo"
import { StyleSheet, View } from "react-native"

import App from "./App"
import store from "./store"
import COLORS from "@utils/colors"

const styles = StyleSheet.create({
    app: {
        height: "100%",
        backgroundColor: COLORS.black,
        paddingTop: 35,
    },
})

const Root = () => (
    <Provider store={store}>
        <View style={styles.app}>
            <App />
        </View>
    </Provider>
)

registerRootComponent(Root)
