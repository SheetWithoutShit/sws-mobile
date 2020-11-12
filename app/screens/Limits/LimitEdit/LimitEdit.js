import React, { useState } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Dropdown from "@components/Inputs/Dropdown"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"

import globalStyles from "@utils/styles"
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
    const [category, setCategory] = useState("")
    const [info, setInfo] = useState(DEFAULT_CATEGORY_INFO)
    const [limit, setLimit] = useState("")

    const isValid = category && limit
    const title = route.params.isEdit ? "Edit limit": "Create a limit"

    const handleChangeCategory = (value, index) => {
        setCategory(value)
        index ? setInfo(MOCK_CATEGORIES[index - 1].info) : setInfo(DEFAULT_CATEGORY_INFO)
    }

    return (
        <View style={globalStyles.container}>
            <Header
                text={title}
                icon={{ name: "speedometer", height: "18", width: "24", color: COLORS.gold }}
                isSecondary={true}
            />
            <View style={globalStyles.formContainer}>
                <Dropdown
                    label="Category"
                    placeholder="Select a category..."
                    items={MOCK_CATEGORIES}
                    handleChange={handleChangeCategory}
                />
                <Text style={[
                    styles.info,
                    globalStyles.info,
                    DEFAULT_CATEGORY_INFO === info && styles.defaultInfo,
                ]}>
                    {info}
                </Text>
                <NumberInput
                    label="Limit ₴"
                    handleChange={(value) => setLimit(value)}
                    value={limit}
                />
                <View style={globalStyles.formButtonsContainer}>
                    <Button
                        label="Cancel"
                        color="none"
                        size="small"
                        labelColor="gold"
                        labelStyle={globalStyles.formCancelButton}
                        handlePress={() => navigation.goBack()}
                    />
                    <Button
                        label="Submit"
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
