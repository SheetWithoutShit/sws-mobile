import React from "react"
import { View } from "react-native"

import ColorButton from "@components/Buttons/ColorButton"
import { SETTINGS_SCREEN } from "@utils/constants"


const Profile = ({ navigation }) => {
    return (
        <View>
            <ColorButton
                size="medium"
                color="green"
                label="Settings"
                handlePress={() => navigation.navigate(SETTINGS_SCREEN)}
            />
        </View>
    )
}

export default Profile
