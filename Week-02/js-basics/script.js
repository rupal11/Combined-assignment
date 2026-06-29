// Sum values in object arrays
// let items={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// let output={}

// for (let item in items){
//     let sum=0;

//     for(let kk  of items[item] ){
//         sum+=kk;
//     }
//     console.log(item);
//     console.log(items[item]);
//     console.log(sum);

//     output[item]=sum;
    
    
// }
// console.log(output);

// *********************************************************************************************************

// Count word occurrences in array

// let input=["apple", "banana", "apple", "orange", "banana", "apple"]



// for (let index in input){ //prints index and value
//     console.log(index + input[index]);
// }

// for(let value of input){ //prints value
//     console.log(value);
// }

// *********************************************************************************************************

// Swap keys and values of object

// let input={ a: "x", b: "y", c: "z" }

// for (index in input){
//     let a=input[index];
//     console.log(index, input[index], a);
//     input[index]=index;
//     index=a;
    
// }

// // create another object to store values
// console.log(input);

// *********************************************************************************************************


// Find the largest value key

let input={ a: 10, b: 50, c: 20 }

let answer,a=0;

for (let index in input){
    if(input[index]>a){
        a=input[index];
        answer=index;
        
    }
}

console.log(answer)




