function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = [4, 2, 3, 1];

console.log('====== 정렬 전 =====');
console.log(arr);

BubbleSort(arr);

console.log('===== 정렬 후 =====');
console.log(arr);

// 장점: 이해와 구현이 간단함
// 단점: 성능이 좋지 않음
