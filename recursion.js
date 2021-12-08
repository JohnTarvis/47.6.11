/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length > 0){
    return product(nums[0] * product(nums.slice(1)));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longest = words[0].length;
  if(worlds[0].length > longest){
    return longest;
  }

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let eol = str[1];
  if(str.length > 1){
    eol += everyOther(str.slice(1));
  }
  return eol;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str[0] !== str[-1] && str.length > 2){
    return false;
  }
  if(!isPalindrome(str.slice(1,-1))){
    return false;
  }

  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let index = -1;
  if(arr.length > 1){
    if(arr[0] === val){
      index++;
      return findIndex(arr.slice(1),val);
    }
  }
  return index;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let rev = str[-1];
  rev += revString(str.slice(0,-1));
  return rev;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for(let key in obj){
    if(typeof obj[key] === 'string') arr.push(obj[key]);
    if(typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
  }  
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
