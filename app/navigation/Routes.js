import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "@screens/Home/Home"
import Transactions from "@screens/Transactions/Transactions"
import LimitsList from "@screens/Limits/LimitsList/LimitsList"
import LimitEdit from "@screens/Limits/LimitEdit/LimitEdit"
import {
    TRANSACTIONS_SCREEN,
    HOME_SCREEN,
    LIMITS_SCREEN,
    LIMIT_EDIT_SCREEN,
} from "@utils/constants"


const Stack = createStackNavigator()

const Routes = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={HOME_SCREEN} component={Home}/>
        <Stack.Screen name={TRANSACTIONS_SCREEN} component={Transactions} />
        <Stack.Screen name={LIMITS_SCREEN} component={LimitsList}/>
        <Stack.Screen name={LIMIT_EDIT_SCREEN} component={LimitEdit}/>
    </Stack.Navigator>
)

export default Routes
