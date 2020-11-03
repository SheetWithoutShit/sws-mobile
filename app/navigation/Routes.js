import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "@screens/Home/Home"
import Transactions from "@screens/Transactions/Transactions"
import Limits from "@screens/Limits/Limits"
import LimitEdit from "@screens/Limits/LimitEdit/LimitEdit"
import LimitDetails from "@screens/Limits/LimitDetails/LimitDetails"
import Settings from "@screens/Settings/Settings"
import Profile from "@screens/Profile/Profile"
import DeleteAccount from "@screens/Settings/DeleteAccount/DeleteAccount"
import ReportDaily from "@screens/Reports/ReportDaily/ReportDaily"
import ReportMonth from "@screens/Reports/ReportMonth/ReportMonth"
import EmailChange from "@screens/Settings/EmailChange/EmailChange"
import PasswordChange from "@screens/Settings/PasswordChange/PasswordChange"
import {
    TRANSACTIONS_SCREEN,
    HOME_SCREEN,
    LIMITS_SCREEN,
    LIMIT_EDIT_SCREEN,
    LIMIT_DETAILS_SCREEN,
    SETTINGS_SCREEN,
    PROFILE_SCREEN,
    DELETE_ACCOUNT_SCREEN,
    REPORT_DAILY_SCREEN,
    REPORT_MONTH_SCREEN,
    EMAIL_CHANGE_SCREEN,
    PASSWORD_CHANGE_SCREEN,
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
        <Stack.Screen name={LIMIT_DETAILS_SCREEN} component={LimitDetails}/>
        <Stack.Screen name={SETTINGS_SCREEN} component={Settings}/>
        <Stack.Screen name={EMAIL_CHANGE_SCREEN} component={EmailChange}/>
        <Stack.Screen name={PASSWORD_CHANGE_SCREEN} component={PasswordChange}/>
        <Stack.Screen name={DELETE_ACCOUNT_SCREEN} component={DeleteAccount}/>
        <Stack.Screen name={REPORT_DAILY_SCREEN} component={ReportDaily}/>
        <Stack.Screen name={REPORT_MONTH_SCREEN} component={ReportMonth}/>
    </Stack.Navigator>
)

export default Routes
