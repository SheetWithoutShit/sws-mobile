import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import Header from "@components/Header/Header"
import Dropdown from "@components/Inputs/Dropdown"
import NumberInput from "@components/Inputs/NumberInput"
import Button from "@components/Buttons/Button"
import COLORS from "@utils/colors"
import { getCategories } from "@api/limits"

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

    const { params } = route

    const [category, setCategory] = useState(params.category)
    const [limit, setLimit] = useState(params.limit)
    const [info, setInfo] = useState(categoryItem?.info || DEFAULT_CATEGORY_INFO)

    const title = params.isEdit ? "Edit limit": "Create a limit"
    const categoryItem = categories.find(c => c.label === category)

    const isValid = category
        && limit !== null
        && (category !== params.category || limit !== params.limit)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

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
