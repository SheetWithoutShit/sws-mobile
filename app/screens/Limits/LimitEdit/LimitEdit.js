import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"

import Header from "@components/Header/Header"
import Dropdown from "@components/Inputs/Dropdown"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { discardChangesEffect } from "@utils/effects"

import globalStyles from "@utils/styles"
import styles from "./style"


const DEFAULT_CATEGORY_INFO = "Chose any category in order to get more information."
const MOCK_CATEGORIES = [
    { label: "Other", value: "Other" },
    { label: "Travel", value: "Travel",
        info: "Flights, train tickets, car rentals, hotels and much more for your vacation" },
    { label: "Beauty & Medicine", value: "Beauty & Medicine" },
    { label: "Entertainment and Sports", value: "Entertainment & Sports" },
    { label: "Cafes & Restaurants", value: "Cafes & Restaurants" },
    { label: "Products & Supermarkets", value: "Products & Supermarkets",
        info: "Goods and services in supermarkets and specialty stores selling food and beverages" },
    { label: "Cinema", value: "Cinema" },
]

const LimitEdit = ({ route, navigation }) => {
    const { params } = route
    const categoryItem = MOCK_CATEGORIES.find(c => c.label === params.category)

    const [category, setCategory] = useState(params.category)
    const [limit, setLimit] = useState(params.limit)
    const [info, setInfo] = useState(categoryItem?.info || DEFAULT_CATEGORY_INFO)

    const isValid = category && limit
    const title = params.isEdit ? "Edit limit": "Create a limit"
    const initialState = { category: params.category, limit: params.limit }
    const hasUnsavedChanges = category !== initialState.category || limit !== initialState.limit

    useEffect(
        () => discardChangesEffect(navigation, hasUnsavedChanges),
        [navigation, hasUnsavedChanges],
    )

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
                    placeholder={"Select a category..."}
                    item={categoryItem}
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
