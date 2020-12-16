import React, { useEffect } from "react"
import { View } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import moment from "moment"

import Header from "@components/Header/Header"
import PieProgress from "@components/Charts/PieProgress/PieProgress"
import TransactionsList from "@components/App/TransactionsList/TransactionsList"
import { getCategoryTransactions } from "@api/transactions"
import { LIMIT_EDIT_SCREEN } from "@utils/constants"
import { DATETIME_FORMAT } from "@utils/time"

import styles from "./style"


const LimitDetails = ({ route, navigation }) => {
    const dispatch = useDispatch()

    const { limit } = route.params
    const { categoriesTransactions } = useSelector(state => state.transactions )

    useEffect(() => {
        const startDate = moment().startOf("month").format(DATETIME_FORMAT)
        const endDate = moment().endOf("month").format(DATETIME_FORMAT)
        dispatch(getCategoryTransactions(limit.name, startDate, endDate))
    }, [dispatch])

    const navigateEditForm = () => {
        navigation.navigate(LIMIT_EDIT_SCREEN, {
            isEdit: true,
            limit: limit,
        })
    }

    const primaryText = `${parseFloat(limit.spent).toFixed(2)} ₴`
    const secondaryText = `${limit.balance} ₴`

    const transactions = categoriesTransactions[limit.name] || []

    return (
        <View style={styles.container}>
            <Header text={limit.name}/>
            <PieProgress
                progress={limit.spent / limit.balance}
                primaryText={primaryText}
                secondaryText={secondaryText}
                handleTextPress={navigateEditForm}
            />
            <TransactionsList transactions={transactions}/>
        </View>
    )
}

export default LimitDetails
