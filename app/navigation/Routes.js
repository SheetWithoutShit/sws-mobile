import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SignIn from "@screens/SignIn/SignIn"


const Stack = createStackNavigator()

const Routes = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen
            name="SignIn"
            component={SignIn}
        />
    </Stack.Navigator>
)

export default Routes
