//1.
let uninitialized;
console.log(uninitialized); 
// 결과값 < undefined >
// -> 변수를 생성만 하고 해당하는 값을 할당하지 않은 상태이기 때문

//2.
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//상수형 변수의 경우 변수에 값을 재할당 할 수 없기 때문


//3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 <19>
//->배열의 인덱스는 0부터 시작하기 때문에 3번인덱스에 대응하는 값은 19이다


//4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
//mySchedule변수가 빈 문자열의 형태를 띄고 있음 즉 js가 인식하기에는 falsy한 값이다.
//!!->부정의 부정이므로 아무런 변화가 없으므로 false 출력