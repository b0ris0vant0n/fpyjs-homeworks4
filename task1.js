function getPasswordChecker(password) {
    return function(checking) {
        if (password === checking) {
            return true
        }
        return false
    }
}

const check = getPasswordChecker('Bab321')


console.log(check('Bab321'))
console.log(check('Bab123'))