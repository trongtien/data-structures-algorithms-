
/**
 * Pick pivot node
 * Loop array
 * if array[i] < pivot node push left array 
 * if array[i] > pivot node push right array 
 */
function quickSort(array) {
    if(array.length <= 1) return array
    const pivotNode = array[0]
    let leftArray = []
    let rightArray = []

    for(let i = 1; i< array.length; i++) {
        if(array[i] < pivotNode) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }

    return [...quickSort(leftArray), pivotNode, ...quickSort(rightArray)]
}


function run(){
    let arr = [9,10,8,7,6,5,4,3,2,1]
    console.time()
    const test = quickSort(arr)
    console.timeEnd()
    console.log('Test quick sort', test)
}

run()