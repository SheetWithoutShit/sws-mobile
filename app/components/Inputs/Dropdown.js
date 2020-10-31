import React from "react"
import { View, Text } from "react-native"
import PickerSelect from "react-native-picker-select"

import styles from "./style"


const Dropdown = ({ label, items, placeholder, handleChange, style }) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <PickerSelect
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                    placeholder: styles.placeholder,
                    style,
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={handleChange}
                placeholder={{ label: placeholder }}
                blurOnSubmit={true}
                items={items}
            />
        </View>
    )
}

export default Dropdown
