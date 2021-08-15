/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
describe("#doubleValues", function() {
  it("doubles values in an array", function() {
    expect(doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
  });
  // it("works for negative numbers", function() {
  //   expect(doubleValues([1, -2, -3])).toEqual([2, -4, -6]);
  // });
});

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
describe("#onlyEvenValues", function() {
  it("returns a new array of only even values", function() {
    expect(onlyEvenValues([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
describe("#showFirstAndLast", function() {
  it("returns an array of only the first and last characters in an array", function() {
    expect(showFirstAndLast(["elie", "colt", "matt", "tim"])).toEqual([
      "ee",
      "ct",
      "mt",
      "tm"
    ]);
  });
});

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
describe("#addKeyAndValue", function() {
  it("adds a key and value to an array of objects", function() {
    var arr = [
      { name: "Elie" },
      { name: "Tim" },
      { name: "Matt" },
      { name: "Colt" }
    ];
    var updatedArr = [
      { name: "Elie", title: "instructor" },
      { name: "Tim", title: "instructor" },
      { name: "Matt", title: "instructor" },
      { name: "Colt", title: "instructor" }
    ];
    expect(addKeyAndValue(arr, "title", "instructor")).toEqual(updatedArr);
  });
});

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
describe("#vowelCount", function() {
  it("returns an object with the keys as vowels and the values as the count", function() {
    expect(vowelCount("elie")).toEqual({ e: 2, i: 1 });
    expect(vowelCount("tim")).toEqual({ i: 1 });
    expect(vowelCount("matt")).toEqual({ a: 1 });
    expect(vowelCount("hmmm")).toEqual({});
    expect(vowelCount("i am awesome and so are you")).toEqual({
      i: 1,
      a: 4,
      e: 3,
      o: 3,
      u: 1
    });
  });
});


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/
describe("#doubleValuesWithMap", function() {
  it("doubles values in an array", function() {
    expect(doubleValuesWithMap([1, 2, 3])).toEqual([2, 4, 6]);
  });
  it("works for negative numbers", function() {
    expect(doubleValuesWithMap([1, -2, -3])).toEqual([2, -4, -6]);
  });
});


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
describe("#valTimesIndex", function() {
  it("returns a new array with each value multiplied by the index", function() {
    expect(valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
  });
  it("works for negative numbers", function() {
    expect(valTimesIndex([1, -2, -3])).toEqual([0, -2, -6]);
  });
});


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
describe("#extractKey", function() {
  it("returns a new array with the value of each key in an array objects", function() {
    var arr = [
      { name: "Elie" },
      { name: "Tim" },
      { name: "Matt" },
      { name: "Colt" }
    ];
    expect(extractKey(arr, "name")).toEqual(["Elie", "Tim", "Matt", "Colt"]);
  });
});


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
describe("#extractFulName", function() {
  var arr = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" }
  ];
  it("returns a new array with the value of each key in an array objects", function() {
    expect(extractFullName(arr, "name")).toEqual([
      "Elie Schoppik",
      "Tim Garcia",
      "Matt Lane",
      "Colt Steele"
    ]);
  });
});


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/
describe("#filterByValue", function() {
  var arr = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true }
  ];
  it("returns a new array of objects that contain a key", function() {
    expect(filterByValue(arr, "isCatOwner")).toEqual([
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Colt", last: "Steele", isCatOwner: true }
    ]);
  });
});


/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

describe("#find", function() {
  var arr = [1, 2, 3, 4, 5];
  it("returns the first value found in an array", function() {
    expect(find(arr, 3)).toEqual(3);
  });
  it("returns undefined if the value is not found", function() {
    expect(find(arr, 10)).toEqual(undefined);
  });
});

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
describe("#findInObj", function() {
  var arr = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true }
  ];
  it("returns the first value found in an array", function() {
    expect(findInObj(arr, "isCatOwner", true)).toEqual({
      first: "Tim",
      last: "Garcia",
      isCatOwner: true
    });
  });
  it("returns undefined if the value is not found", function() {
    expect(findInObj(arr, "isCatOwner", false)).toEqual(undefined);
  });
});

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
describe("#removeVowels", function() {
  it("removes all vowels from a string", function() {
    expect(removeVowels("elie")).toEqual("l");
    expect(removeVowels("TIM")).toEqual("tm");
    expect(removeVowels("ZZZZZZ")).toEqual("zzzzzz");
  });
});

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

describe("#doubleOddNumbers", function() {
  it("returns an array of all odd numbers doubled", function() {
    expect(doubleOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 6, 10]);
    expect(doubleOddNumbers([4, 4, 4, 4, 4])).toEqual([]);
  });
});
