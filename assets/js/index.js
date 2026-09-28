
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
