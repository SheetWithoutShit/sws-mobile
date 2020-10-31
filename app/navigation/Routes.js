import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "@screens/Home/Home"
import Transactions from "@screens/Transactions/Transactions"
import Limits from "@screens/Limits/Limits"
import LimitEdit from "@screens/Limits/LimitEdit/LimitEdit"
import Settings from "@screens/Settings/Settings"
import Profile from "@screens/Profile/Profile"
import DeleteAccount from "@screens/Settings/DeleteAccount/DeleteAccount"
import ReportDaily from "@screens/Reports/ReportDaily/ReportDaily"
import {
    TRANSACTIONS_SCREEN,
    HOME_SCREEN,
    LIMITS_SCREEN,
    LIMIT_EDIT_SCREEN,
    SETTINGS_SCREEN,
    PROFILE_SCREEN,
    DELETE_ACCOUNT_SCREEN,
    REPORT_DAILY_SCREEN,
} from "@utils/constants"


const Stack = createStackNavigator()

const Routes = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={HOME_SCREEN} component={Home}/>
        <Stack.Screen name={PROFILE_SCREEN} component={Profile}/>
        <Stack.Screen name={TRANSACTIONS_SCREEN} component={Transactions} />
        <Stack.Screen name={LIMITS_SCREEN} component={Limits}/>
        <Stack.Screen name={LIMIT_EDIT_SCREEN} component={LimitEdit}/>
        <Stack.Screen name={SETTINGS_SCREEN} component={Settings}/>
        <Stack.Screen name={DELETE_ACCOUNT_SCREEN} component={DeleteAccount}/>
        <Stack.Screen name={REPORT_DAILY_SCREEN} component={ReportDaily}/>
    </Stack.Navigator>
)

export default Routes
