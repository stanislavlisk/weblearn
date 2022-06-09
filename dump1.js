////...non related to htm...l///


var manyWords = ['applet' , 'tree' , 'berry' , 'bighouse', 'ape', 'ale'];



//returns longest word in array.
function findLongestWord(array,) {
  let Lword = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > Lword.length) {
      Lword = array[i];
    }
  }
  return Lword;
};
//console.log(findLongestWord(manyWords));



//takes string , returns object made of letters as properties and property
//values as letter indexes
function mapString(str,) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
    }
    return map;
};
//console.log(mapString('querry'));



//takes word as string and object from mapString
//checks if all letters of string exists as property in object
function compareLetters(str, map) {
  for (let letter of str) {
    if (map[letter]) {

    } else {
      return false;
    }
  }
  return true;
};
//console.log(compareLetters('giga', { a: [ 0 ], u: [ 1 ], e: [ 2 ], p: [ 3, 4 ], l: [ 5 ] }));



//takes array of indices and index minindex, returns
//bigger index than minindex + 1
function nextIndex(arr, minindex) {
  for (let index of arr) {
    if (index >= minindex) {
      return index + 1;
    }
  }
  return false;
};
//console.log(compareIndex([4, 5, 6, 7, 8], 5))



function issubSequence(str, map) {
  let minIndex = 0;
  for (let letter of str) {
    if (map[letter]) {
      minIndex = nextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;

      }

    } else {
      return false;
    }
  }
  return true;
};
//console.log(issubSequence('alp', { a: [ 0 ], u: [ 1 ], e: [ 2 ], p: [ 3, 4 ], l: [ 5 ] }));



//main function. finds longest subsequence of given word in array
function longestSubsequence(str, dictArray) {
  let Longest = '';
  let seqArray = [];
  let map = mapString(str);

  for (var word of dictArray) {
    if (issubSequence(word, map)) {
      seqArray.push(word);
    }
  }
  Longest = findLongestWord(seqArray);
  return Longest;
};
console.log(longestSubsequence('mapple', manyWords))


///end///
