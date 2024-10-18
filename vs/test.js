// 1번
// var 데이터 = {
// 	num : [10, 20, 30, 40, 50]
// }
// console.log() <= 결과 값 150이 출력되도록

let data = { num : [10,20,30,40,50]};
let result = data.num.reduce((sum, current) => sum + current , 0);
console.log(result);

// 2번
// <button>버튼</button>
// 버튼 클릭시 2초 후에 javascript es6 이라는 글자
// console.log() 에 출력