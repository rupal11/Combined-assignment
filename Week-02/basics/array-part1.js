// array declare using square brackets
// are resizable, can contain different data type [0,1,2,3,true,"abc"]
// zero indexed, accessed using arr[0]
// array copy operation create shallow copies

// shallow copies means both orignial and duplicate have same reference, ek jagah change hoga to dusri jahgaha reflect karega
// deep copies means complete separate copy create ki gayi hai

//length is a property
//console.log(myarr)  will print array, length and prototype
//push(),pop(),shift(),unshift(),includes(),indexOf(),join() slice(), splice()

let myarr=[0,1,2,3,4,5];

// push(d)
// used to push data at last; accepts a value
myarr.push(6)
console.log(myarr);

//pop
//used to  remove element
myarr.pop();
console.log(myarr);

//unshift and shift;
// used to insert/delete elements from start (heavy operation shince everything need to shift)
myarr.unshift(9);
console.log(myarr);

myarr.shift();
console.log(myarr)

console.log(myarr.includes(19)); //returns boolean; whether a values is present in array or not
console.log(myarr.includes(3)); // similar indexOF, returns -1 is value is no present, index of value

let myarr1=[1,1,1,1];
console.log(myarr1.indexOf(1)); //return first index if muliple same values are present; lastindexOf() also exist


//slice and splice (**interview question)
//slice does not change the original array, ,splice changes the original array
// slice last index is not included, splice last index is included
let mynewarray=[0,1,2,3,4,5];
console.log(mynewarray);
console.log(mynewarray.slice(2,5));
console.log("after slice: "  + mynewarray)
console.log(mynewarray.splice(2,5));
console.log("after splice: "  + mynewarray)



