import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "@screens/Home/Home"
import Transactions from "@screens/Transactions/Transactions"
import Limits from "@screens/Limits/Limits"
import { TRANSACTIONS_SCREEN, HOME_SCREEN, LIMITS_SCREEN } from "@utils/constants"


const Stack = createStackNavigator()

const Routes = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={HOME_SCREEN} component={Home}/>
        <Stack.Screen name={TRANSACTIONS_SCREEN} component={Transactions} />
        <Stack.Screen name={LIMITS_SCREEN} component={Limits}/>
    </Stack.Navigator>
)

export default Routes
