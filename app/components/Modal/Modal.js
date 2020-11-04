import React from "react"
import RNModal from "react-native-modal"

import COLORS from "@utils/colors"


const BACKDROP_OPACITY = 0.8
const ANIMATION_IN_DURATION = 100
const ANIMATION_OUT_DURATION = 300


const Modal = ({ visible, children, handleClose }) => {
    return (
        <RNModal
            isVisible={visible}
            backdropColor={COLORS.black}
            backdropOpacity={BACKDROP_OPACITY}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={ANIMATION_IN_DURATION}
            animationOutTiming={ANIMATION_OUT_DURATION}
            backdropTransitionInTiming={ANIMATION_IN_DURATION}
            backdropTransitionOutTiming={ANIMATION_OUT_DURATION}
            onBackButtonPress={handleClose}
            onBackdropPress={handleClose}
        >
            {children}
        </RNModal>
    )
}

export default Modal
