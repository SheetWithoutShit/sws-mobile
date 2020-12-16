import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"

import ReportHeader from "@screens/Reports/ReportHeader"
import PieProgress from "@components/Charts/PieProgress/PieProgress"
import Bar from "@components/Charts/Bar/Bar"
import Button from "@components/Buttons/Button"
import { getDailyReport } from "@api/transactions"
import { DATETIME_FORMAT } from "@utils/time"

import globalStyles from "@utils/styles"
import styles from "./style"


const ReportDaily = ({ navigation }) => {
    const dispatch = useDispatch()

    const { dailyBudget } = useSelector(state => state.user)
    const { dailyReport } = useSelector(state => state.transactions)

    const spend = dailyReport.length ? dailyReport.slice(-1)[0].amount : 0
    const progress = spend / (dailyBudget || 1)

    const weekSpends = dailyReport.map(d => d.amount)
    const weekSavings = dailyReport.map(d => dailyBudget - d.amount)

    useEffect(() => {
        const startDate = moment()
            .subtract(7, "d")
            .startOf("day")
            .format(DATETIME_FORMAT)
        const endDate = moment().format(DATETIME_FORMAT)
        dispatch(getDailyReport(startDate, endDate))
    }, [dispatch])

    return (
        <View style={globalStyles.container}>
            <ReportHeader screen="Day" navigation={navigation}/>
            <View style={styles.pieContainer}>
                <PieProgress
                    progress={progress}
                    primaryText={`${spend.toFixed(2)} ₴`}
                    secondaryText={`${dailyBudget.toFixed(2)} ₴`}
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
