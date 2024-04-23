// convertCamelCase function.
// Will remove - or _ characters and capitalize the first letter following it starting from the second word. 
// In other words, will turn it to camel case.
// 
// Parameters:
// inputString - The string to be converted.
//
// Will return the string without - or _ in camel case. If the first letter is already capitalized, it will not change.
// 
// Time Complexity - O(n)

function convertCamelCase(inputString) {
    let strArray = inputString.split(/[-_]/)
    
    for (let index = 0; index < strArray.length; index++) {

        if (index == 0) {
            continue
        }

        let currentString = strArray[index]
        let capChar = currentString[0].toUpperCase()
        let strRest = currentString.substring(1)

        strArray[index] = capChar + strRest
    }

    return strArray.join("")
}

console.log(convertCamelCase("the-stealth-warrior"));
console.log(convertCamelCase("the_stealth_warrior"));
console.log(convertCamelCase("The-stealth-warrior"));

// SwitchChar function.
// Will replace characters in a string with its encoded counterpart and return the encoded string/
// switchChar(inputString, unencodedString, encodedString)
// 
// Parameters:
// inputString - The string to be converted.
// unencodedString - A string containing all the characters that should be encoded if found.
// encodedString - A string containing the counterparts of each character in unencodedString at the same index.
//
// Will return -1 if inputString is longer than unencodedString.
// Will return "Length mismatch" if encodedString and unencodedString are not the same length.
// Will return "Repeated value" if there are repeated characters in unencodedString.
// Will return -1 if a character in inputString is not found in unencodedString.
// Otherwise will return the encoded version of the string.
// 
// Time Complexity - O(n)


function switchChar(inputString, unencodedString, encodedString) {
    if (unencodedString.length != encodedString.length) {
        return "Length mismatch."
    }

    for (let index = 0; index < unencodedString.length; index++) {
        if (index != unencodedString.lastIndexOf(unencodedString[index])) {
            return "Repeated value."
        }
    }

    if (inputString.length > unencodedString.length) {
        return -1
    }

    let outputString = ""

    for (let index = 0; index < inputString.length; index++) {

        if (unencodedString.indexOf(inputString[index]) == -1) {
            return -1
        }

        let currentCheckCharacter = inputString[index]
        let indexInUnencodedString = unencodedString.indexOf(currentCheckCharacter)
        let characterAtIndexInEncodedString = encodedString[indexInUnencodedString]

        outputString += characterAtIndexInEncodedString
    }

    return outputString
}

console.log(switchChar("cade", "abcdefgh", "grdwqsdr"));