import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import Header from "@components/Header/Header"
import Dropdown from "@components/Inputs/Dropdown"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { LIMITS_SCREEN } from "@utils/constants"
import { getCategories, createLimit, updateLimit } from "@api/limits"

import globalStyles from "@utils/styles"
import styles from "./style"


const DEFAULT_CATEGORY_INFO = "Chose any category in order to get more information."


const LimitEdit = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.limits.categories).map(category => ({
        label: category.name,
        value: category.name,
        info: category.info,
    }))

    const { limit, isEdit } = route.params

    const [category, setCategory] = useState(limit?.name)
    const [amount, setAmount] = useState(limit?.balance)
    const [info, setInfo] = useState(limit?.info || DEFAULT_CATEGORY_INFO)

    const title = isEdit ? "Edit limit": "Create a limit"
    const categoryItem = categories.find(c => c.label === category)

    const isValid = category
        && amount
        && (category !== limit?.name || amount !== limit?.balance)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleSubmit = async () => {
        const handler = isEdit
            ? updateLimit(limit.id, parseFloat(amount))
            : createLimit(category, parseFloat(amount))

        dispatch(handler).then((success) => {
            if (success) navigation.navigate(LIMITS_SCREEN)
        })
    }

    // TODO: fix discard changes effect
    // const initialState = { category: params.category, limit: params.limit }
    // const hasUnsavedChanges = category !== initialState.category || limit !== initialState.limit
    // useEffect(
    //     () => discardChangesEffect(navigation, hasUnsavedChanges),
    //     [navigation, hasUnsavedChanges],
    // )

    const handleChangeCategory = (value, index) => {
        setCategory(value)
        index ? setInfo(categories[index - 1].info) : setInfo(DEFAULT_CATEGORY_INFO)
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
                    items={categories}
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
                    handleChange={(value) => setAmount(value)}
                    value={amount}
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
                        handlePress={handleSubmit}
                    />
                </View>
            </View>
        </View>
    )
}

export default LimitEdit
