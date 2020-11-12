import React from "react"
import { View, Text } from "react-native"

import ReportHeader from "@screens/Reports/ReportHeader"
import PieProgress from "@components/Charts/PieProgress/PieProgress"
import Bar from "@components/Charts/Bar/Bar"
import Button from "@components/Buttons/Button"

import globalStyles from "@utils/styles"
import styles from "./style"


const MOCK_SPEND = 64.50
const MOCK_BALANCE = 365.00
const MOCK_SPENDS = [10, 20, 30, 40, 50, 60, 50]
const MOCK_SAVINGS = [70, 60, 30, 40, 30, 60, 10]

const ReportDaily = ({ navigation }) => {
    const progress = MOCK_SPEND / MOCK_BALANCE

    return (
        <View style={globalStyles.container}>
            <ReportHeader screen="Day" navigation={navigation}/>
            <View style={styles.pieContainer}>
                <PieProgress
                    progress={progress}
                    primaryText={`${MOCK_SPEND.toFixed(2)} ₴`}
                    secondaryText={`${MOCK_BALANCE.toFixed(2)} ₴`}
                />
            </View>
            <View style={styles.detailsContainer}>
                <Button buttonStyle={styles.detailsButton}>
                    <Text style={styles.detailsText}>Spends</Text>
                    <View style={styles.detailsChart}>
                        <Bar data={MOCK_SPENDS}/>
                    </View>
                </Button>
                <Button buttonStyle={styles.detailsButton}>
                    <Text style={styles.detailsText}>Savings</Text>
                    <View style={styles.detailsChart}>
                        <Bar data={MOCK_SAVINGS}/>
                    </View>
                </Button>
            </View>
        </View>
    )
}

export default ReportDaily
