function cigarParty(cigars, isWeekend){
    if (cigars >= 40 && cigars <= 60 && !isWeekend) {
        return true;
    }
    if (cigars >= 40 && isWeekend) {
        return true
    }

    return false
}

function dateFashion(you, date){
    if (you <= 2 || date <= 2) {
        return 0;
    }
    if (you >= 8 || date >= 8) {
        return 2
    }

    return 1
}

function squirrelPlay(temp, isSummer){
    if (temp >= 60 && temp <= 90 && !isSummer) {
        return true
    }
    if (temp >= 60 && temp <= 100 && isSummer) {
        return true
    }

    return false
}

function caughtSpeeding(speed, isBirthday){
    if (isBirthday)
    {
        if (speed <= 65)
        {
            return 0
        }
        if (speed <= 85)
        {
            return 1
        }

        return 2
    }
    if (speed <= 60)
    {
        return 0
    }
    if (speed <= 80)
    {
        return 1
    }

    return 2
}

function sortaSum(a, b){
    sum = a + b

    if (sum >= 10 && sum <= 19) {
        return 20
    }

    return sum
}

function alarmClock(day, vacation){
    if (vacation) {
        if (day > 0 && day <= 5)
        {
            return "10:00"
        }

        return "off"
    }

    if (day > 0 && day <= 5)
    {
        return "7:00"
    }

    return "10:00"
}

function love6(a, b){
    if (a === 6 || b === 6) {
        return true
    }

    if (a + b === 6 || a - b === 6 || b - a === 6)
    {
        return true
    }

    return false
}

function in1To10(n, outsideMode){
    if (outsideMode) {
        if (n >= 10 || n <= 1) {
            return true
        }

        return false
    }

    if (n >= 1 && n <= 10) {
        return true
    }

    return false
}

function specialEleven(n){
    if (n % 11 === 0) {
        return true
    }

    if ((n - 1) % 11 === 0) {
        return true
    }

    return false
}

function more20(n){
    if ((n - 1) % 20 === 0 || (n - 2) % 20 === 0)
    {
        return true
    }

    return false
}

function old35(n){
    if (n % 3 === 0 && n % 5 === 0){
        return false
    }

    if (n % 3 === 0 || n % 5 === 0) {
        return true
    }

    return false
}

function less20(n){
    if ((n + 1) % 20 === 0 || (n + 2) % 20 === 0)
    {
        return true
    }

    return false
}

function nearTen(num){
    if (num % 10 <= 2 || num % 10 >= 8) {
        return true
    }

    return false
}

function teenSum(a, b){
    sum = a + b;

    if (a >= 13 && a <= 19 || b >= 13 && b <= 19)
    {
        return 19
    }

    return sum
}

function answerCell(isMorning, isMom, isAsleep){
    if (isAsleep)
    {
        return false
    }

    if (isMorning) {
        if (isMom) {
            return true
        }

        return false
    }

    return true
}

function teaParty(tea, candy){
    if (tea < 5 || candy < 5) {
        return 0
    }

    if (tea >= 2 * candy || candy >= 2 * tea) 
    {
        return 2
    }

    return 1
}

function fizzString(str){
    if (str[0] === "f" && str[str.length - 1] === 'b') {
        return "FizzBuzz"
    }

    if (str[0] === 'f')
    {
        return "Fizz"
    }

    if (str[str.length - 1] === 'b')
    {
        return "Buzz"
    }

    return str
}

function fizzString2(n){
    let str = n.toString()

    if (n % 3 === 0)
    {
        str = "Fizz"
    }

    if (n % 5 === 0) {
        str = "Buzz"
    }

    if (n % 3 === 0 && n % 5 === 0) {
        str = "FizzBuzz"
    }

    return str + "!"
}

function twoAsOne(a, b, c){
    if (a + b === c || a + c === b || b + c === a)
    {
        return true
    }

    return false
}

function inOrder(a, b, c, bOk){
    if (bOk) {
        if (c > b) {
            return true
        }
    }

    if (c > b && b > a)
    {
        return true
    }

    return false
}

function inOrderEqual(a, b, c, equalOk){
    if (equalOk) {
        if (c >= b && b >= a) {
            return true
        }
    }

    if (c > b && b > a)
    {
        return true
    }

    return false
}

function lastDigit(a, b){
    if (a % 10 === b % 10) {
        return true
    }

    return false
}

function endUp(str){
    if (str.length < 3) {
        return str.toUpperCase()
    }

    return str.substring(0, str.length - 3) +  str.substring(str.length - 3).toUpperCase()
}

function everyNth(str, n){
    let temp = ""

    for (let index = 0; index < str.length; index+=n) {
        temp += str[index]
    }

    return temp
}

function stringTimes(str, n){
    let temp = ""

    for (let index = 0; index < n; index++) {
        temp += str;
    }

    return temp
}

function frontTimes(str, n){
    let temp = ""

    let front;
    if (str.length < 3)
    {
        front = str
    }
    else
    {
        front = str.substring(0, 3)
    }

    for (let index = 0; index < n; index++) {
        temp += front;
    }

    return temp
}

function countXX(str){
    let count = 0

    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'x' && str[index + 1] === 'x') {
            count++
        }
    }

    return count
}

function doubleX(str){
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'x') {
            if (str[index + 1] === 'x') {
                return true
            }
            return false
        }
    }

    return false
}

function stringBits(str){
    let temp = ""

    for (let index = 0; index < str.length; index += 2) {
        temp += str[index];
    }

    return temp
}

function stringSplosion(str){
    let temp = ""

    for (let index = 1; index < str.length; index++) {
        temp += str.substring(0, index);
        
    }

    return temp
}

function lessBy10(a, b, c){
    if (a - b >= 10 || a - c >= 10 || c - a >= 10 || b - a >= 10 || b - c >= 10 || c - b >= 10) {
        return true
    }

    return false
}

function withoutDoubles(die1, die2, noDoubles){
    if (noDoubles && die1 === die2) {
        die1 += 1;
        if (die1 > 6)
        {
            die1 = 1;
        }
    }

    return die1 + die2
}

function maxMod5(a, b){
    let larger = a;
    let smaller = b;

    if (a === b) {
        return 0
    }

    if (a < b)
    {
        larger = b
        smaller = a
    }

    if (a % 5 === b % 5)
    {
        return smaller
    }

    return larger
}

function redTicket(a, b, c){
    if (a === b && b === c && a === 2) {
        return 10
    }

    if (a === b && b === c) {
        return 5
    }

    if (a != b && a != c) {
        return 1
    }

    return 0
}

function greenTicket(a, b, c){
    if (a === b && b === c) {
        return 20
    }

    if (a === b || a === c || b === c)
    {
        return 10
    }

    return 0
}

function blueTicket(a, b, c){
    let sumAB = a + b
    let sumBC = b + c
    let sumAC = a + c

    if (sumAB === 10 || sumBC === 10 || sumAC === 10) {
        return 10
    }

    if (sumAB - 10 === sumAC || sumAB - 10 === sumBC) {
        return 5
    }

    return 0
}

function shareDigit(a, b){
    if (Math.floor(a / 10) == Math.floor(b / 10) || Math.floor(a / 10) == b % 10) {
        return true
    }

    if (a % 10 == Math.floor(b / 10) || a % 10 == b % 10) {
        return true
    }

    return false
}

function sumLimit(a, b){
    let sum = a + b

    if (sum.toString().length != a.toString().length) {
        return a
    }

    return sum
}
