let arr = [5, 4, 1, 3, 2]

let sort = arr.sort()
console.log(sort) //[1, 2, 3, 4, 5]

let arr1 = [1, 89, 5, 8, 9, 34]
let sort1 = arr1.sort()
console.log(sort1)  //NOt working


arr1.sort((a,b) => a-b)
console.log(arr1)  //[1, 5, 8, 9, 34, 89]