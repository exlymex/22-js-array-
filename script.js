// 1
// function arrCopy(arr) {
//     return arr;
//  }

// let arr = [1,2,3]
// const arr1 = arrCopy(arr)

// console.log(arr1)
// console.log(arr)


// 2
// function arrToString(arr) {
//     return arr.join(' ').split()
// }
// const arr = [1,2,3,4]
// const arr1 = arrToString(arr)
// const arr2 = arrToString([10,200,3333]) 

// console.log(arr)
// console.log(arr1)
// console.log(arr2)


//3

// function getLength(arr) {
//     let b = []
//    for(let i = 0;i < arr.length;i++){
//        b.push(arr[i].length) 
//    }
//    return b 
// }

// const arr = getLength(['Ivan','Pavlo','Ira'])
// const arr2 = getLength(['Oleksiy','Andriana']) 

// console.log(arr)
// console.log(arr2)

//4

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let pos = i+1; pos < arr.length;pos++){
            if (arr[pos] == arr[i]) {
                delete arr[pos]
            }
        }
    }
    return arr
}

// const arr1 = removeDuplicates(['html', 'css', 'html', 'js'])
// const arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'])

// console.log(arr1)
// console.log(arr2)
