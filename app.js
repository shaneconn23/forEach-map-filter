// forEach
// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function doubleValues(array) {
    let array2 = [];
    array.forEach(function (value) {
        array2.push(value * 2);
    });
    return array2;
}


// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(array) {
    let array2 = [];
    array.forEach(function (value) {
        if (value % 2 === 0) {
            array2.push(value);
        }
    });
    return array2;
}


// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and
//  last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(array) {
    let array2 = [];
    array.forEach(function (value) {
        array2.push(value[0] + value[value.length - 1]);
    });
    return array2;
}





// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, 
// and a value and returns the array passed to the function with the new key and value added for each object

// addKeyAndValue(
// [
//   {name: 'Elie'},
//   {name: 'Tim'},
//   {name: 'Matt'},
//   {name: 'Colt'}
// ],
//   'title',
//   'instructor'
// )

// /*
//   [
//     {name: 'Elie', title:'instructor'},
//     {name: 'Tim', title:'instructor'},
//     {name: 'Matt', title:'instructor'},
//     {name: 'Colt', title:'instructor'}
//   ]
// */

function addKeyAndValue(array, key, value) {
    array.forEach(function (value2) {
        value2[key] = value;
    });
    return array;
}





// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as
//  the number of times the vowel appears in the string. 
//  This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(string) {
    let array = string.split("");
    let obj = {};
    const vowels = "aeiou";

    array.forEach(function (letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}






// map

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to 
// the function doubled

// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
// function doubleValuesWithMap(arr) {}

function doubleValuesWithMap(array) {
    return array.map(function (value) {
        return value * 2;
    });
}





// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the 
// index it is currently at in the array.

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]

function valTimesIndex(array) {
    return array.map(function (value, index) {
        return value * index;
    });
}




// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )

//   // ['Elie', 'Tim', Matt', 'Colt']

function extractKey(array, key) {
    return array.map(function (value) {
        return value[key];
    });
}





// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the
//  value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

// /*
// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ])

//   // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
// */

function extractFullName(array) {
    return array.map(function (value) {
        return value.first + " " + value.last;
    });
}





// filter
// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// filterByValue(
// [
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia", isCatOwner: true},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],
// 'isCatOwner'
// )

// /*
//   [
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ]
// */

function filterByValue(array, key) {
    return array.filter(function (value) {
        return value[key] !== undefined;
    });
}








// find
// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as
//  the second parameter or undefined if the value is not found in the array.

// find([1,2,3,4,5], 3) // 3
// find([1,2,3,4,5], 10) // undefined

function find(array, value) {
    return array.filter(function (value2) {
        return value2 === value;
    })[0];
}








// findInObj
// Write a function called findInObj which accepts an array of objects, a key, 
// and some value to search for and returns the first found value in the array.

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )

// // {first: 'Tim', last:"Garcia", isCatOwner: true}

function findInObj(array, key, value) {
    return array.filter(function (value2) {
        return value2[key] === value;
    })[0];
}






// removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) 
// removed. Every character in the new string should be lowercased.

// removeVowels('Elie') // ('l')
// removeVowels('TIM') // ('tm')
// removeVowels('ZZZZZZ') // ('zzzzzz')


function removeVowels(string) {
    const vowels = "aeiou";
    return string
        .toLowerCase()
        .split("")
        .filter(function (value) {
            return vowels.indexOf(value) === -1;
        })
        .join("");
}










// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled
//  (HINT - you can use map and fitler to double and then filter the odd numbers).

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []

function doubleOddNumbers(array) {
    return array
        .filter(function (value) {
            return value % 2 !== 0;
        })
        .map(function (value2) {
            return value2 * 2;
        });
}