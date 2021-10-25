let assert = require('assert')
let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let math = require('mathjs')


// 1 factorial
function factorial(num) {
    if (num < 0 || isNaN(num)) {
        return 0
    }
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}


const arrFactorial = num => num <= 1 ? 1 : num * arrFactorial(num - 1)
// FACTORIAL TESTS



// 2 longest string
function longWord(str) {
    const stringsArr = str.split(' ').sort((a, b) => a.length - b.length)
    return stringsArr[stringsArr.length - 1].length
}

const arrLongWord = str => str.split(' ').reduce((accumulate, current) => Math.max(current.length, accumulate), 0)



// 3 biggest num
function biggestNum(arr) {
    return arr.map(innerArr => innerArr.reduce((accumulate, current) => Math.max(accumulate, current)))
}

const arrBiggestNum = arr => arr.map(innerArr => innerArr.reduce((accumulate, current) => Math.max(accumulate, current)))


// 4 string max length
function stringLength(str, num) {
    return str.slice(0, num) + '...'
}
const arrStringLength = (str, num) => str.slice(0, num) + '...'




// 5 Register
function changeRegister(str) {
    return str
        .split(' ').map(word => word.toLowerCase().replace(/^./, word => word.toUpperCase())).join(' ')
}

const arrChangeRegister = str => str
    .split(' ').map(word => word.toLowerCase().replace(/^./, word => word.toUpperCase())).join(' ')



// 6 Copy
function inserting(arr1, arr2, num) {
    return [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]
}

const arrInserting = (arr1, arr2, num) => [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]


// 7
function deleteFalsy(arr) {
    return arr.filter(value => !!value)
}
const arrDeleteFalsy = arr => arr.filter(value => !!value)



// 8
function isInclude(arr) {
    const [firstString, secondString] = arr
    return secondString
        .split('')
        .every(letter => new RegExp(letter, 'i').test(firstString))
}

const arrIsInclude = ([firstString, secondString]) => secondString
    .split('').every(letter => new RegExp(letter, 'i').test(firstString))


// 9
function matrix(arr, num) {
    if (arr.length < num) {
        return arr
    }
    return [arr.slice(0, num), ...matrix(arr.slice(num), num)]
}

const arrMatrix = (arr, num) => arr.length < num ? arr : [arr.slice(0, num), ...arrMatrix(arr.slice(num), num)]


// 10
function recursion(arr, num) {
    if (num <= 0) {
        return arr
    }
    return [num, ...recursion(arr, num - 1)]
}

const arrRecursion = (arr, num) => num <= 0 ? arr : [num, ...arrRecursion(arr, num - 1)]

// TESTS
describe('Factorial', function () {
    function makeTest(number) {
        it(`Факториал ${number} = ${arrFactorial(number)}`, function () {
            assert.equal(factorial(number), math.factorial(number))
        });
        it(`Факториал -${number} = 0 при отрицательном значении`, function () {
            assert.equal(factorial(-number), 0)
        });
    }
    it(`Факториал undefined при строковом значении `, function () {
        assert.equal(factorial('abc'), 0)
    });
    it(`Факториал undefined при undefined`, function () {
        assert.equal(factorial(undefined), 0)
    });

    for (let i = 1; i < 10; i++) {
        makeTest(i)
    }
})

describe('Longest string', function () {
    it(`Результат ${longWord('one two three Krankenhaus four five six seven')} для 'one two three Krankenhaus four five six seven'`, function () {
        assert.equal(longWord('one two three Krankenhaus four five six seven'), 'Krankenhaus'.length)
    });
    it(`Результат ${arrLongWord('Ausfahrt Eintreten Säule Übersetzer')} для 'Ausfahrt Eintreten Säule Übersetzer'`, function () {
        assert.equal(arrLongWord('Ausfahrt Eintreten Säule Übersetzer'), 'Übersetzer'.length)

    });
})


describe('Biggest number', function () {
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 10]]
    it(`Результат ${biggestNum(array)} для ${array}`, function () {
        assert.deepEqual(biggestNum(array), [3,6,10])
    })
    it(`Результат ${arrBiggestNum(array)} для ${array}`, function () {
        assert.deepEqual(arrBiggestNum(array), [3,6,10])
    })
})

describe('String cutter', function () {
    it('Qwert... for "Qwertyui"', function () {
        assert.equal(stringLength('Qwertyui', 5), 'Qwert...')
    });
    it('Zxc... for "Zxc..."', function () {
        assert.equal(arrStringLength('Zxcvb', 3), 'Zxc...')
    });
    it('12345... for "123456"', function () {
        assert.equal(arrStringLength('123456', 5), '12345...')
    });
})

describe('Register changer' , function () {
    it('Hola for hOlA', function () {
        assert.equal(changeRegister('hOlA'), 'Hola')
    });
    it('Headphones for HEadPhoneS', function () {
        assert.equal(arrChangeRegister('HEadPhoneS'), 'Headphones')
    });
})

describe('Inserting array into array', function () {
    it('[4,1,2,3,5] for [1,2,3] [4,5]', function () {
        assert.deepEqual(inserting([1,2,3], [4,5], 1), [4,1,2,3,5])
    });
    it('[4,1,2,3,5] for [1,2,3,4,5,9] [4,5,1,2]', function () {
        assert.deepEqual(arrInserting([1,2,3,4,5,9], [4,5,1,2], 2), [4,5,1,2,3,4,5,9,1,2])
    });
})

describe('Deleting falsy elements from array', function () {
    it('[1, "Hi"] for [1, false, "", 0, undefined, "Hi"]', function () {
        assert.deepEqual(deleteFalsy([1, false, "", 0, undefined, "Hi"]), [1, "Hi"])
    });
    it('[4, "Uno"] for [1, false, "", 0, undefined, "Hi"]', function () {
        assert.deepEqual(arrDeleteFalsy([4, false, "", 0,  "Uno"]), [4, "Uno"])
    });
    it('[true] for [true]', function () {
        assert.deepEqual(arrDeleteFalsy([true]), [true])
    });
})

describe('First elem include second elem', function () {
    it('True for ["Hola","aloha"]', function () {
        assert.equal(isInclude(['Hola','aloha']), true)
    });
    it('False for ["Hola","alhazavr"]', function () {
        assert.equal(arrIsInclude(['Hola','alhazavr']), false)
    });
    it('False for [\'12345\',\'12,34,56\']', function () {
        assert.equal(arrIsInclude(['12345','12,34,56']), false)
    });
})

describe('Matrix for array', function () {
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5,6,7,8,9], 3)', function () {
        assert.deepEqual(matrix([1,2,3,4,5,6,7,8,9], 3), [[1,2,3],[4,5,6],[7,8,9]])
    });
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
        assert.deepEqual(arrMatrix([1,2,3,4,5], 3), [[1,2,3],4,5])
    });
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
        assert.deepEqual(arrMatrix([1,2,3,4,'asdb'], 3), [[1,2,3],4,'asdb'])
    });
})


describe('recursion for array', function () {
    it('[9,8,7,6,5,4,3,2,1] for recursion([], 9)', function () {
        assert.deepEqual(recursion([], 9), [9,8,7,6,5,4,3,2,1])
    });
    it('[4,3,2,1] for recursion([], 9)', function () {
        assert.deepEqual(arrRecursion([], 4), [4,3,2,1])
    });
    it('[4,3,2,1] for recursion([], 9)', function () {
        assert.deepEqual(arrRecursion([], 4), [4,3,2,1,'qwe']) // Провальный тест
    });
})