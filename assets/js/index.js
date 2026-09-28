const vowelsArray = ["a", "e", "i", "o", "u", "y"];

function countVowels(str, vowelsArray) {
    let count = 0;
    
    for (const letter of str.toLowerCase()){
        if(vowelsArray.includes(letter)){
            count ++;
        }
    }
    return count;
}
console.log(countVowels("Hello to you", vowelsArray) );
console.log(countVowels("lorem ipsum dolor sit amet", vowelsArray)); 