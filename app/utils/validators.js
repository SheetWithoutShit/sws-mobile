const PASSWORD_MIN_LENGTH = 8
const PASSWORD_DIGIT_REGEX = /\d/
const PASSWORD_UPPERCASE_REGEX = /[A-Z]/
const PASSWORD_LOWERCASE_REGEX = /[a-z]/

const EMAIL_REGEX = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]{2,}\.[a-zA-Z0-9_.]+$/


export const validatePassword = (value) => {
    const errors = []
    if (value.length < PASSWORD_MIN_LENGTH) {
        errors.push("Password must have minimum 8 characters.")
    }
    if (!PASSWORD_DIGIT_REGEX.test(value)){
        errors.push("Password must have at least one digit.")
    }
    if (!PASSWORD_LOWERCASE_REGEX.test(value)) {
        errors.push("Password must have at least one lowercase letter.")
    }
    if (!PASSWORD_UPPERCASE_REGEX.test(value)) {
        errors.push("Password must have at least one uppercase letter.")
    }
    return errors.length ? errors : null
}

export const validateConfirmPassword = (newPassword, confirmPassword) => {
    const errors = []
    if (confirmPassword !== newPassword) {
        errors.push(["New password and confirm password does not match."])
    }
    return errors.length ? errors : null
}

export const validateEmail = (value) => {
    const errors = []
    if (!EMAIL_REGEX.test(value)) {
        errors.push("Email must have correct format (example@mail.com).")
    }
    return errors.length ? errors : null
}

export const validateSavings = (value) => {
    const errors = []
    if (value < 0 || value > 100) {
        errors.push("Savings is out of range (0-100).")
    }
    return errors.length ? errors : null
}
