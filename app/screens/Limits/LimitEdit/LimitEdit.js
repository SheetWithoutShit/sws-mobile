import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import PickerSelect from "react-native-picker-select"

import { LIMITS_SCREEN, TOUCH_OPACITY } from "@utils/constants"
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.editContainer}>
                <View>
                    <Text style={styles.label}>Category</Text>
                    <PickerSelect
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                            placeholder: styles.categoryPlaceholder,
                        }}
                        useNativeAndroidPickerStyle={false}
                        onValueChange={(value, index) => {
                            setCategory(value)
                            setInfo(MOCK_CATEGORIES[index - 1].info)
                        }}
                        placeholder={{ label: "Select a category..." }}
                        blurOnSubmit={true}
                        items={MOCK_CATEGORIES}
                    />
                </View>
                <Text style={[
                    styles.info,
                    DEFAULT_CATEGORY_INFO === info && styles.defaultInfo,
                ]}>
                    {info}
                </Text>
                <View>
                    <Text style={styles.label}>Limit ₴</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="number-pad"
                        onChangeText={(value) => setLimit(value.replace(/[^0-9]/g, ""))}
                        value={limit}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        activeOpacity={TOUCH_OPACITY}
                        style={[styles.button]}
                        onPress={() => navigation.navigate(LIMITS_SCREEN)}
                    >
                        <Text style={[styles.buttonText, styles.cancelText]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={TOUCH_OPACITY}
                        style={[
                            styles.button,
                            isValid ? styles.okButton : styles.okButtonDisabled,
                        ]}
                        disabled={!isValid}
                    >
                        <Text style={[styles.buttonText, styles.okText]}>
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LimitEdit
