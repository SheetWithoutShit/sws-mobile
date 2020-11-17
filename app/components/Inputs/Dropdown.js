import React from "react"
import { View, Text } from "react-native"
import PickerSelect from "react-native-picker-select"

import styles from "./style"


const Dropdown = ({ label, items, item, placeholder, handleChange, style }) => {
    return (
        <View>
            {label && <Text style={styles.inputLabel}>{label}</Text>}
            <PickerSelect
                style={{
                    inputIOS: { ...styles.input, ...styles.inputText },
                    inputAndroid: { ...styles.input, ...styles.inputText },
                    placeholder: styles.placeholder,
                    style,
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={handleChange}
                placeholder={{ label: placeholder }}
                blurOnSubmit={true}
                items={items}
                value={item?.value}
            />
        </View>
    )
}

export default Dropdown
