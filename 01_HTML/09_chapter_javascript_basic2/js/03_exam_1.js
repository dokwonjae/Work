// 함수 문제 풀이
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// function a() {
//     alert((b+10));
// }
// let b = Number(prompt())
// a()


// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even

// function b(a) {
//     if(a%2==0){
//         alert("even")
//     }else{
//         alert("odd")
//     }
// }
// let a = Number(prompt())
// b(a)

// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55
// let summ= 0;
// function sum(a){
//     for(let i=1; i<=a;i++){
//         summ += i
//     }
//     alert(summ);
// }
// let a = Number(prompt());
// sum(a)

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기
// function min() {
//     mm = Math.min(a,b,c);
//     alert(mm)
// }
// let a = Number(prompt("입력 1"));
// let b = Number(prompt("입력 2"));
// let c = Number(prompt("입력 3"));
// min()


// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5
// 함수 정의 : 2nd 함수 형태(매개변수 있고, return 없음)
// function MultiFive(params) {
//     // 5의 배수 구하는 코딩하면 됨
//     if(params % 5 == 0) {
//         alert("5의 배수이다.");
//     } else {
//         alert("5의 배수가 아니다.")
//     }
//  }
 
//  // 함수 사용(호출)
//  // 사용법 : 함수명(입력값)
//  let num = Number(prompt("숫자"));   // 5
//  MultiFive(num);

// 6) 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80
// 입력2 : 90
// 입력3 : 100
// 결과 : 270
//        90
// 함수 정의 : 2nd 형태
// function MyAvg(params, params2, params3) {
//     // 함수안에서 문제를 푸는 코딩을 하면됨
//     // 합계
//     let sumVal = params + params2 + params3;
//     // 평균
//     let avgVal = sumVal/3;
//     // 출력 
//     console.log(sumVal);
//     console.log(avgVal);
// }
// // 함수 사용(호출)
// // 사용법: 함수명(값, 값2, 값3)
// let num = Number(prompt("숫자"));   // 80
// let num2 = Number(prompt("숫자"));   // 90
// let num3 = Number(prompt("숫자"));   // 100

// MyAvg(num, num2, num3); // 함수 사용