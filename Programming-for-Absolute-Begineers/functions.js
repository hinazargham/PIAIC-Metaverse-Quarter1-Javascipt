const addUnlimitedNumbers = (...numbers) => {
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result
}

const result = addUnlimitedNumbers(0,2,3,45)
console.log(result)
