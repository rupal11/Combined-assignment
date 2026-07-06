// Sum values in object arrays
let input= { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// output { food: 60, travel: 20, bills: 100 }
console.log(Object.values(input));
values=Object.values(input)

let sum=0;

for(v of  values){
    let sum=0
    console.log(v);
    for(kk of v){
        sum+=kk;
    }
    output

}
console.log(sum);