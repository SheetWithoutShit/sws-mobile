import React from "react"
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"

import Home from "@screens/Home/Home"
import SignIn from "@screens/SignIn/SignIn"
import SignUp from "@screens/SignUp/SignUp"
import ForgotPassword from "@screens/ForgotPassword/ForgotPassword"
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
import Budget from "@screens/Budget/Budget"
import Monobank from "@screens/Monobank/Monobank"
import Notification from "@screens/Notification/Notification"
import {
    TRANSACTIONS_SCREEN,
    HOME_SCREEN,
    SIGNIN_SCREEN,
    SIGNUP_SCREEN,
    FORGOT_PASSWORD_SCREEN,
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
    BUDGET_SCREEN,
    MONOBANK_SCREEN,
    NOTIFICATION_SCREEN,
} from "@utils/constants"
import { useSelector } from "react-redux"


const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const NAVIGATOR_OPTIONS = { headerShown: false }
const SCREEN_FADE_OPTIONS = { cardStyleInterpolator: forFade }
const SCREEN_SWIPE_OPTIONS = { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

const HOME_SCREEN_OPTIONS = { ...SCREEN_FADE_OPTIONS, gestureEnabled: false }

const AuthStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={NAVIGATOR_OPTIONS} initialRouteName={SIGNIN_SCREEN} gestureEnabled={false}>
            <Stack.Screen name={SIGNIN_SCREEN} component={SignIn} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={SIGNUP_SCREEN} component={SignUp} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={FORGOT_PASSWORD_SCREEN} component={ForgotPassword} options={SCREEN_SWIPE_OPTIONS}/>
        </Stack.Navigator>
    )
}
const AppStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={NAVIGATOR_OPTIONS} initialRouteName={HOME_SCREEN} gestureEnabled={false}>
            <Stack.Screen name={HOME_SCREEN} component={Home} options={HOME_SCREEN_OPTIONS}/>
            <Stack.Screen name={PROFILE_SCREEN} component={Profile} options={SCREEN_FADE_OPTIONS}/>
            <Stack.Screen name={BUDGET_SCREEN} component={Budget} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={MONOBANK_SCREEN} component={Monobank} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={NOTIFICATION_SCREEN} component={Notification} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={TRANSACTIONS_SCREEN} component={Transactions} options={SCREEN_FADE_OPTIONS}/>
            <Stack.Screen name={LIMITS_SCREEN} component={Limits} options={SCREEN_FADE_OPTIONS}/>
            <Stack.Screen name={LIMIT_EDIT_SCREEN} component={LimitEdit} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={LIMIT_DETAILS_SCREEN} component={LimitDetails} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={SETTINGS_SCREEN} component={Settings} options={SCREEN_FADE_OPTIONS}/>
            <Stack.Screen name={EMAIL_CHANGE_SCREEN} component={EmailChange} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={PASSWORD_CHANGE_SCREEN} component={PasswordChange} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={DELETE_ACCOUNT_SCREEN} component={DeleteAccount} options={SCREEN_SWIPE_OPTIONS}/>
            <Stack.Screen name={REPORT_DAILY_SCREEN} component={ReportDaily} options={SCREEN_FADE_OPTIONS}/>
            <Stack.Screen name={REPORT_MONTH_SCREEN} component={ReportMonth} options={SCREEN_FADE_OPTIONS}/>
        </Stack.Navigator>
    )
}


const Routes = () => {
    const userLogged = useSelector(state => state.user.loggedIn)
    return userLogged ? <AppStack/> : <AuthStack/>
}

export default Routes
