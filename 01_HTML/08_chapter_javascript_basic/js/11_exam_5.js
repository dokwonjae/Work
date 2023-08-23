/* 조건문 연습 */
// 1) 입력값이 y이면 글쓰기 라고 출력하고
// y가 아니면 글수정이라고 출력하기
// 힌트 : 조건문
// 새로운 출력방법(3) :
// console.log(값) 대신에 아래 코드를 사용하면 화면에 출력됨
// 값이 웹브라우저에 출력됨
// document.querySelector("#output").innerHTML = "값";
// let strVal = prompt("글자를 입력해 주세요");

// // 조건문
// if (strVal === "y"){
//     // 웹브라우저에 출력하기
//     document.querySelector("#output").innerHTML = "글쓰기"
// }else{
//     // 웹브라우저에 출력하기
//     document.querySelector("#output").innerHTML = "글수정"
// }
// 2) // 입력값이 짝수이면 짝수입니다.
// 홀수이면 홀수입니다. 출력하는 코딩을 작성하세요.
// 입력 : 0
// 출력 : 짝수입니다.
//  단, 출력은 웹브라우저에 하세요
// let a = Number(prompt("숫자 입력"))
// if(a%2==0){
//     document.querySelector("#output").innerHTML = "짝수"
// }else{
//     document.querySelector("#output").innerHTML = "홀수"
// }

// 3) // 입력값이 3~5가 들어오면 봄입니다.
//          6~8 들어오면 여름입니다.
//          9~11 들어오면 가을입니다.
//          12~2 들어오면 겨울입니다.
// let a = Number(prompt("몇월입니까?"))
// if(a>=3 && a<=5){
//     document.querySelector("#output").innerHTML = "봄"
// }else if(a>=6 && a<=8){
//     document.querySelector("#output").innerHTML = "여름"
// }else if(a>=9 && a<=11){
//     document.querySelector("#output").innerHTML = "가을"
// }else if(a===12 || a===1 || a===2) {
//     document.querySelector("#output").innerHTML = "겨울"
// }else {
//     document.querySelector("#output").innerHTML = "잘못된 숫자를 입력하셨습니다"
// }



// 4) // 입력을 하나 받아서 "admin" 이 맞으면 
//   "해당 콘텐츠 이용이 가능합니다." 라고 출력
// 아니면 
//   다시 입력값을 숫자로 하나 또 받아서
//   입력값이 1 ~ 7 사이에 있으면 
//   "해당 콘텐츠 이용이 가능합니다." 라고 출력하고,
//   아니면 "해당 콘텐츠에 접근할 수 없습니다."
// 힌트 : 중첩 if문 사용(if문 안에 if문 있는 구조)

// let a = prompt();

// if(a=="admin"){
//     document.querySelector("#output").innerHTML = "해당 콘텐츠 이용이 가능합니다."
// }else {
//     let b = Number(prompt());
//     if(b>=1 && b<=7){
//         document.querySelector("#output").innerHTML = "해당 콘텐츠 이용이 가능합니다."
//     }else{
//         document.querySelector("#output").innerHTML = "해당 콘텐츠에 접근할 수 없습니다."
//     }
// }

// 5) // X 가 1일 경우 "x의 값은 1입니다."
// X 가 2일 경우 "x의 값은 2입니다."
// X 가 1도2 도 아닐경우 "x의 값은 1 또는 2가 아닙니다."
// 입력 : 2
// 출력 : x의 값은 2입니다.
// 단, 화면에 출력하세요

// let a = Number(prompt())
// if(a==1){
//     document.querySelector("#output").innerHTML = "x의 값은 1입니다"
// }else if(a==2){
//     document.querySelector("#output").innerHTML = "x의 값은 2입니다"
// }else{
//     document.querySelector("#output").innerHTML = "x의 값은 1 또는 2가 아닙니다"
// }