import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import Swiper from "react-native-swiper"
import { useDispatch, useSelector } from "react-redux"

import ReportHeader from "@screens/Reports/ReportHeader"
import Pie from "@components/Charts/Pie/Pie"
import { getMonthReport } from "@api/transactions"

import globalStyles from "@utils/styles"
import styles from "./style"


const ReportMonth = ({ navigation }) => {
    const dispatch = useDispatch()

    const monthReport = useSelector(state => state.transactions.monthReport)
        .map(report => ({ key: report.name, value: parseFloat(report.amount) }))

    monthReport.sort((a, b) => a.value < b.value)
    const [activeIndex, setActiveIndex] = useState(0)
    const spends = monthReport.map(item => parseFloat(item.value))

    const amount = spends.reduce((a, b) => a + b, 0)

    useEffect(() => {
        dispatch(getMonthReport())
    }, [dispatch])

    return (
        <View style={globalStyles.container}>
            <ReportHeader screen="Month" navigation={navigation}/>
            <View style={styles.info}>
                <Text style={styles.secondaryText}>July 2020</Text>
                <Text style={styles.primaryText}>{amount.toFixed(2)} ₴</Text>
            </View>
            {monthReport.length
                ? <View style={styles.emptyContainer}>
                    <Text style={styles.emptyMessage} isSecondary={true}>No month reports for current month.</Text>
                </View>
                : <Swiper
                    style={styles.wrapper}
                    paginationStyle={styles.pagination}
                    dotStyle={styles.dot}
                    loop={false}
                    activeDotStyle={[styles.dot, styles.activeDot]}
                    onIndexChanged={(index) => setActiveIndex(index)}
                >
                    {monthReport.map((item, index) => {
                        const spend = parseFloat(item.value).toFixed(2)
                        const percentage = (spend * 100.0) / amount
                        return (
                            <View key={index}>
                                <Pie
                                    data={monthReport}
                                    activeIndex={activeIndex}
                                    primaryText={`${percentage.toFixed(2)}%`}
                                />
                                <View style={styles.info}>
                                    <Text style={styles.primaryText}>{item.value} ₴</Text>
                                    <Text style={styles.secondaryText}>{item.key}</Text>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            }

        </View>
    )
}

export default ReportMonth
