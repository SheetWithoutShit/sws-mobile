import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"

import ReportHeader from "@screens/Reports/ReportHeader"
import PieProgress from "@components/Charts/PieProgress/PieProgress"
import Bar from "@components/Charts/Bar/Bar"
import Button from "@components/Buttons/Button"
import { getDailyReport } from "@api/transactions"

import globalStyles from "@utils/styles"
import styles from "./style"


const ReportDaily = ({ navigation }) => {
    const dispatch = useDispatch()

    const { income, savings } = useSelector(state => state.user)
    const { dailyReport } = useSelector(state => state.transactions)

    const incomeAfterSavings = income - (income / 100.00) * savings
    const daysInMonth = moment().daysInMonth()
    const balance = incomeAfterSavings / daysInMonth
    const spend = dailyReport.length ? dailyReport.slice(-1)[0].amount : 0
    const progress = spend / (balance || 1)

    const weekSpends = dailyReport.map(d => d.amount)
    const weekSavings = dailyReport.map(d => balance - d.amount)

    useEffect(() => {
        dispatch(getDailyReport())
    }, [dispatch])

    return (
        <View style={globalStyles.container}>
            <ReportHeader screen="Day" navigation={navigation}/>
            <View style={styles.pieContainer}>
                <PieProgress
                    progress={progress}
                    primaryText={`${spend.toFixed(2)} ₴`}
                    secondaryText={`${balance.toFixed(2)} ₴`}
                />
            </View>
            <View style={styles.detailsContainer}>
                <Button buttonStyle={styles.detailsButton}>
                    <Text style={styles.detailsText}>Spends</Text>
                    <View style={styles.detailsChart}>
                        <Bar data={weekSpends}/>
                    </View>
                </Button>
                <Button buttonStyle={styles.detailsButton}>
                    <Text style={styles.detailsText}>Savings</Text>
                    <View style={styles.detailsChart}>
                        <Bar data={weekSavings}/>
                    </View>
                </Button>
            </View>
        </View>
    )
}

export default ReportDaily
