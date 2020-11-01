import React, { useState } from "react"
import { View, Text } from "react-native"
import Swiper from "react-native-swiper"

import ReportHeader from "@screens/Reports/ReportHeader"
import Pie from "@components/Charts/Pie/Pie"

import styles from "./style"


const MOCK_MONTH_REPORTS = [
    {
        key: "Card transfers",
        value: "400.00",
    },
    {
        key: "Products & Supermarket",
        value: "300.00",
    },
    {
        key: "Utilities & Internet",
        value: "100.00",
    },
    {
        key: "Cinema",
        value: "100.00",
    },
]

const ReportMonth = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const spends = MOCK_MONTH_REPORTS.map(item => parseFloat(item.value))
    const amount = spends.reduce((a, b) => a + b, 0)
    return (
        <View style={styles.container}>
            <ReportHeader screen="Month" navigation={navigation}/>
            <View style={styles.info}>
                <Text style={styles.secondaryText}>July 2020</Text>
                <Text style={styles.primaryText}>{amount.toFixed(2)} ₴</Text>
            </View>
            <Swiper
                style={styles.wrapper}
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={[styles.dot, styles.activeDot]}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {MOCK_MONTH_REPORTS.map((item, index) => {
                    const spend = parseFloat(item.value).toFixed(2)
                    const percentage = (spend * 100.0) / amount
                    return (
                        <View key={index}>
                            <Pie
                                data={MOCK_MONTH_REPORTS}
                                activeIndex={activeIndex}
                                text={Math.round(percentage)}
                            />
                            <View style={styles.info}>
                                <Text style={styles.primaryText}>{item.value} ₴</Text>
                                <Text style={styles.secondaryText}>{item.key}</Text>
                            </View>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    )
}

export default ReportMonth
