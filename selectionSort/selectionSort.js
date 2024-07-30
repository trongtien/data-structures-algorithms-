// O(N2)
function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let currentIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[currentIndex] > array[j]) {
        currentIndex = j;
      }
    }

    if (currentIndex !== i) {
      [array[i], array[currentIndex]] = [array[currentIndex], array[i]];
    }
  }

  return array;
}

function run() {
  console.time();
  let array = [9, 10, 8, 7, 6, 5, 4, 3, 2, 1];
  const test = selectionSort(array);
  console.timeEnd();
  console.log("Test selection sort", test);
}

run();
