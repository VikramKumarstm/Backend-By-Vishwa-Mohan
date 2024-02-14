let arr = [1, 5, 8, 9, 34, 89]

console.log(arr)  //[1, 5, 8, 9, 34, 89]

arr.unshift(50)
console.log(arr) //[50, 1, 5, 8, 9, 34, 89]

arr.unshift(100)
console.log(arr) //[100, 50, 1, 5, 8, 9, 34, 89]

arr.unshift(140, 210, 325)
console.log(arr)  //[140, 210, 325, 100, 50, 1, 5, 8, 9, 34, 89]