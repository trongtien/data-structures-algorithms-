/**
 * O(n*n)
 * step 1 [9,10,8,7,6,5,4,3,2,1]
 * step 2 swap 10 8 [9,8,10,7,6,5,4,3,2,1]
 * step 3 swap 10 7 [9,8,7,10,6,5,4,3,2,1]
 */
function bubbleSort(array) {
    for(let i = 0; i <array.length; i++) {
        for(let j=0; j<array.length -1; j++) {
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] =[array[j+1], array[j]]
            }
        }
    }

    return array
}

function run(){
    console.time()
    let array = [9,10,8,7,6,5,4,3,2,1]
    const test = bubbleSort(array)
    console.timeEnd()
    console.log('Test bubble sort', test)
}

run()


