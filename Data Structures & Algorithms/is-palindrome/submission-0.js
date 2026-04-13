class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerJoinedString = s.split(' ').join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const revlowerJoinedString = lowerJoinedString.split('').reverse().join('')
        console.log('lowerJoinedString',lowerJoinedString,revlowerJoinedString)
        return lowerJoinedString===revlowerJoinedString
    }
}
