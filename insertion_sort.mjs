function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertingData = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > insertingData) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = insertingData;
    }
}

let arr = [4, 1, 5, 3, 6, 2];

console.log('==== 정렬 전 =====');
console.log(arr);

InsertionSort(arr);

console.log('===== 정렬 후 =====');
console.log(arr);

// 삽입정렬의 성능
// 성능 O(n2)
// 장점 이해가 쉽고 구현이 간단함
// 단점 성능이 좋지 않음
