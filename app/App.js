import React from "react"
import { registerRootComponent } from "expo"
import { NavigationContainer } from "@react-navigation/native"

import Routes from "@navigation/Routes"


class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )
    }
}

registerRootComponent(App)
