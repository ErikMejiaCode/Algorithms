// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
    Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {

    let stringLength = 0;

    for (i = 0; i < str.length; i++) {
        let currentString = "";

        for (j = i; j < str.length; j++) {
            if (currentString.includes(str[j])) {
                break;
            }
            else {
                currentString += str[j];
            }
        }
        stringLength = stringLength > currentString.length ? stringLength : currentString.length;
    }
    return stringLength;
}


console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));



// /* 
//   Given two strings S and T containing only lowercase letters and "#" characters,
//   return if they are equal when both are typed into empty text editors.
//   # character means a backspace character.
//   i.e., after processing the backspaces, are the two strings equal?
//   Bonus: solve in O(n) time
// */

// const S1 = "ab#c";
// const T1 = "ad#c";
// const expected1 = true;
// // Explanation: Both S and T become "ac"

// const S2 = "ab##";
// const T2 = "c#d#";
// const expected2 = true;
// // Explanation: Both S and T become ""

// const S3 = "a##c";
// const T3 = "#a#c";
// const expected3 = true;
// // Explanation: Both S and T become "c"

// const S4 = "a#c";
// const T4 = "b";
// const expected4 = false;
// // Explanation: S becomes "c" while T becomes "b".

// /**
//  * Determines if the given strings are equal after the backspace characters
//  * "#" are processed.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} S
//  * @param {string} T
//  * @returns {boolean} Whether the given strings are equal after backspaces
//  *    have been processed.
//  */
// function backspaceStringCompare(S, T) { }
