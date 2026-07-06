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

// for(let i=0;i<input.length;++i){
//     let s=input[i];
//     let count=1;
//     for(let j=i+1;j<input.length;++j){
//         if(s===input[j] && input[j]!=-1 ){
//             count++;
//             input[j]=-1
//         }
//     }
    
//     if(s!=-1)
//     console.log(s + " : " + count);
// }




// *********************************************************************************************************

// Swap keys and values of object

// let input={ a: "x", b: "y", c: "z" }       
// let output={}

// for (index in input){
//     let a=input[index];
//     console.log(index, input[index], a);
    
//     output[a]=index;
//     // console.log(output);
    
// }

// // create another object to store values
// console.log(output);

// *********************************************************************************************************


// Find the largest value key

// let input={ a: 10, b: 50, c: 80 }

// let answer,a=0;

// for (let index in input){
//     if(input[index]>a){
//         a=input[index];
//         answer=index;
        
//     }
// }

// console.log(answer)

// *********************************************************************************************************

// Flatten object of arrays into one array

// const input={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

// let output=[];

// console.log(Object.values(input))

// // for (let values in input) {
// //     console.log(input[values]);
// // }
// let k= Object.values(input)
// output=k.flat();
// console.log(output);

// *********************************************************************************************************

// Group people by city

// const input=[
//     { name: "A", city: "Delhi" },
//     { name: "B", city: "Mumbai" },
//     { name: "C", city: "Delhi" }
// ]
  
// //   output { Delhi: ["A", "C"], Mumbai: ["B"] }
// const output={}
// for (let values of input){
//     console.log(values);

//     const city=values.city;
//     const name=values.name;

//     let ar=[];

//     if(output[city]){
//         ar=output[city];
//     }
    
//     ar.push(name);
//     output[city]=ar;
// }

// console.log(output);

// *********************************************************************************************************

// Filter object by values > 50
// const input={ a: 20, b: 60, c: 40, d: 90 }
// output { b: 60, d: 90 }

const output={};

function filterObject(obj){
    // for(keys of obj)
    // console.log(keys);
    // if()
}

filterObject(input);
