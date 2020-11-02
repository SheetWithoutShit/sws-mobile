import React, { useState } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Dropdown from "@components/Inputs/Dropdown"
import BorderInput from "@components/Inputs/BorderInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"

import styles from "./style"


const DEFAULT_CATEGORY_INFO = "Chose any category in order to get more information."
const MOCK_CATEGORIES = [
    { label: "Other", value: "Other" },
    { label: "Travel", value: "Travel",
        info: "Flights, train tickets, car rentals, hotels and much more for your vacation" },
    { label: "Beauty and Medicine", value: "Beauty and Medicine" },
    { label: "Entertainment and Sports", value: "Entertainment and Sports" },
    { label: "Cafes and Restaurants", value: "Cafes and Restaurants" },
    { label: "Products and Supermarkets", value: "Products and Supermarkets" },
    { label: "Cinema", value: "Cinema" },
]

const LimitEdit = ({ route, navigation }) => {
    const [category, setCategory] = useState(null)
    const [info, setInfo] = useState(DEFAULT_CATEGORY_INFO)
    const [limit, setLimit] = useState("0")

    const isValid = category && parseFloat(limit)
    const title = route.params.isEdit ? "Edit limit": "Create a limit"

    const handleChangeCategory = (value, index) => {
        setCategory(value)
        index ? setInfo(MOCK_CATEGORIES[index - 1].info) : setInfo(DEFAULT_CATEGORY_INFO)
    }

    return (
        <View style={styles.container}>
            <Header
                text={title}
                icon={{ name: "speedometer", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={styles.editContainer}>
                <Dropdown
                    label="Category"
                    placeholder="Select a category..."
                    items={MOCK_CATEGORIES}
                    handleChange={handleChangeCategory}
                />
                <Text style={[
                    styles.info,
                    DEFAULT_CATEGORY_INFO === info && styles.defaultInfo,
                ]}>
                    {info}
                </Text>
                <BorderInput
                    label="Limit ₴"
                    keyboard="number-pad"
                    handleChange={(value) => setLimit(value.replace(/[^0-9]/g, ""))}
                    value={limit}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        label="Cancel"
                        color="none"
                        size="small"
                        labelColor="gold"
                        labelStyle={styles.cancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="OK"
                        color={isValid ? "gold" : "grey"}
                        size="small"
                        disabled={!isValid}
                    />
                </View>
            </View>
        </View>
    )
}

export default LimitEdit
