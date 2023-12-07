// Function to check if two strings are valid anagrams
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths of the two strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and then join them back into strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Compare the sorted strings to determine if they are anagrams
    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "Listen";
const string2 = "Silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are valid anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
