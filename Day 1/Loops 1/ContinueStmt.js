// let num = 100;
// for(let i=0; i<num; i++) {
//     if(i % 2 !== 0) {
//         continue;
//     }
//     console.log(i)
// }

//Nested loop

for(let i=0; i<5; i++) {
    for(let j=0; j<10; j++) {
        if(j%2===0) {
            continue
        }
        console.log(j)
    }
    console.log('\n')
}