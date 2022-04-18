// 배열을 생성 하는 4가지 방법
const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);

// 많은 요소가 담긴 배열을 생성할시에 사용하는 함수
// 배열에서 사용할수 있는 함수

// .fill() 입력 받은 입력 받은 파라미터의 값으로 모든 요소를 초기화 시켜줄수 있다.

const arr5 = new Array(5).fill(5);
// console.log(arr5);
// [ 5, 5, 5, 5, 5 ] 출력

// 값은 수가 아닌 순서대로 값을 초기화 시켜주고 싶을 시에 사용
// .from()  첫번째 파라미터로 초기화할 배열을 받고  두번째 파라미터로 로직을 작성할수 있다. 두번째 파라미터로는 함수를 받는다.
// 함수의 첫번재 값은 배열의 값  두번재 값은 인덱스를 받는다.
const arr6 = Array.from(Array(5), function (v, i) {
  return i + 1;
});
// console.log(arr6);
//[ 1, 2, 3, 4, 5 ] 출력

// 배열을 하나의 문자열로 합치는 함수
// .join()
// console.log(arr3.join(','));
// 1,2,3,4,5 출력

// 모든 요소를 거꾸로 돌려주는 메소드
// .reverse()
// console.log(arr3.reverse());
//[ 5, 4, 3, 2, 1 ] 출력

// 두개의 배열을 합쳐주는 함수

// .concat()
const arr7 = [6, 7, 8, 9, 10];
// console.log(arr3.concat(arr7));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 출력

// 배열의 끝 부분에 요소를 추가, 삭제 해주는 함수

// .push() 끝 부분에 요소를 추가
// arr7.push(11);
// arr7.push(12, 13, 14, 15);
// console.log(arr7);
// [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 출력

// .pop() 끝 부분에 요소를 삭제
// arr7.pop(); // 10
// arr7.pop(); // 9

// console.log(arr7.pop()); // 8   pop 의 리턴 값은 추가한 요소를 반환

// 첫번째 요소를 추가 및 삭제 해주는 함수

// .shift(); 맨 앞 요소에 삭제

// .unshift(); 맨앞 요소 추가

//배열의 중간을 잘라 값을 알수 있는 함수

// arr.slice(n,m) : n 부터 m 까지 반환

let arr = [1, 2, 3, 4, 5];

arr.slice(1, 4); // [2,3,4]

// m 은 포함 하지 않고 바로 앞자리를 의미하고

// 안쓰면 배열 끝까지를 의미한다. //

for (const item of arr) {
  console.log(item);
}

// 객체

const obj = new Object();
const obj2 = {};
const obj3 = { name: '약', age: '20' };

// 객체에 새로운 데이터 추가

obj3['Id'] = '111';
obj3.phone = '010 xxxx xxxx';
console.log(obj3);

// 객체에 요소 삭제

delete obj3.phone;
console.log(obj3);

// 오브젝트의 키벨류 알아내기

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
