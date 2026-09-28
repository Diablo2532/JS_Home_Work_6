
const numbers = [1, 2, 3, 4, 5,];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log('element', element);
    
}


const numbers2 = [1, 15, 12, 22, 34, 143];


for (let index = 0; index < numbers2.length; index++) {
    const element = numbers2[index];
   if (element % 2 === 0 ) {
    console.log('element', element);
   } ; 
    
}

const arrays5 = [7, 8, 9];

arrays5.unshift(1, 2, 3);
console.log('arrays5', arrays5);

const arrays4 = [1, 2, 3];

arrays4.push(4,5,6);
console.log('arrays4', arrays4);

const originArrays =  [9, 10, 11, 12, 13];

const copyArrays = originArrays.slice(2 , 5);
console.log('copyArrays', copyArrays);

const strings = ["aaa", "bbb", "ccc"];

console.log(strings.shift());

console.log(strings); 

console.log(strings.pop());

console.log(strings); 
const arrays1 = [1, 2, 3];
const arrays2 = [4, 5, 6];

const arrays3 = arrays1.concat(arrays2);
console.log("arrrays3", arrays3);


arrays3.reverse(); 
console.log('arrays3', arrays3);
const firstArray = [1, 2, 3, 4, 5]; 
const secondArray = firstArray.splice(2,4);

console.log('secondArrray', secondArray);

firstArray.splice(1,2);
console.log('firstArray', firstArray);

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


