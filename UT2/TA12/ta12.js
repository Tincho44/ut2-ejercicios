function generatePassword(length) {

    if (length < 8) {
        return "Password must be at least 8 characters long"; 
    }

    let password = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?"
    let hasUpper = false
    hasLower = false
    hasNumber = false
    hasSpecial = false

    while (password.length < length) {
        let char = characters.charAt(Math.floor(Math.random() * characters.length));
        password += char;

        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= '0' && char <= '9') hasNumber = true;
        else hasSpecial = true;

        if (password.length === length) {
            if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
                password = "";
                hasUpper = hasLower = hasNumber = hasSpecial = false;
            }
        }
    }

    return password;
}

console.log(generatePassword(4));
console.log(generatePassword(8));
console.log(generatePassword(8));
console.log(generatePassword(12));

