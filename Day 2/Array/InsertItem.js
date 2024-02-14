let arr = [1, 5, 8, 9, 34, 89]
arr.push(20)
console.log(arr)  //[1, 5, 8, 9, 34, 89, 20]
arr.push(40)
console.log(arr) //[1, 5, 8, 9, 34, 89, 20, 40]

arr.push(10, 30, 60)
console.log(arr) //[1, 5, 8, 9, 34, 89, 20, 40, 10, 30, 60]