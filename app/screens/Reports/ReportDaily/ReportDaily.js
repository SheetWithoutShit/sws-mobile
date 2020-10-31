import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import ReportHeader from "@screens/Reports/ReportHeader"
import Pie from "@components/Charts/Pie/Pie"
import Bar from "@components/Charts/Bar/Bar"
import styles from "./style"


const ReportDaily = ( ) => {
    return (
        <View style={styles.container}>
            <ReportHeader screen="Day"/>
            <Pie
                progress={0.4}
                // eslint-disable-next-line
                spend={64.50.toFixed(2)}
                // eslint-disable-next-line
                balance={365.00.toFixed(2)}
            />
            <View style={styles.detailsContainer}>
                <TouchableOpacity style={styles.details}>
                    <Text style={styles.detailsText}>Spends</Text>
                    <View style={styles.detailsChart}>
                        {/* eslint-disable-next-line*/}
                        <Bar data={[10, 20, 30, 40, 50, 60, 50]}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.details}>
                    <Text style={styles.detailsText}>Savings</Text>
                    <View style={styles.detailsChart}>
                        {/* eslint-disable-next-line*/}
                        <Bar data={[70, 60, 30, 40, 30, 60, 10]}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReportDaily
