// 반복문 : for(80%) === while문
// 예제 1)
// 입력 : 없음
// 출력 : 안녕하세요 5번 출력
// TODO: for 문
// 사용법 : for(초기값; 조건식; 증감식){}
// for(let i=1; i<=5; i++){
//     console.log("안녕하세요");
// }

// TODO: while 문 변경
// 사용법 : 
// 초기값;
// while(조건식) {
//   반복문;
//   증감식;
// }
// let i=1; // 초기값

// while(i<=5) { // while(조건식)
//     console.log("안녕하세요");
//     i++; // 증감식
// }

// TODO: do ~ while; 문(반복문 #3)
// TODO: 특징 : 조건식이 거짓이라도 1번은 실행함
// let i=1; // 초기값

// do {
//     console.log("안녕하세요");
//     i++; // 증감식
// } while(i<=5); // while(조건문);

// TODO: 반복문 특수형태 : 무한 루프(loop, 반복문)(무한히 반복)
// TODO: while 문 무한루프
// 사용법 : 예제
//    while(true) { 반복문; }
// while(true) {
//     console.log("안녕하세요");
// }

// TODO: for 문 무한루프
// for(;true;) {
//     console.log("안녕하세요");
// }

// 예제 : 무한루프 예제(while문)
// 입력값이 숫자 5가 입력될때 까지
// 무한히 화면에 숫자를 출력하세요
// 무한루프(while)
// while(true) {
//     // 입력값
//     let num = Number(prompt("숫자"));

//     // num 값 검사
//     if(num === 5) {
//         break; // 무한 루프 중단
//     }
//     // 화면 출력
//     console.log(num + "번째 반복입니다.");
// }

// let num =0;
// while(true){
//     let a = Number(prompt("숫자"));
//     num++;
//     if(a==5){
//     break;
//     }
//     console.log(num + "번째 반복입니다.")
// }

// 연습문제 1) 숫자를 입력하면 이미지를 화면에 그 숫자만큼 반복해서 출력하세요
// let a = Number(prompt("숫자를 입력하세요"))
// let nul ="";
// for(let i = 1; i<=a ;i++){
//     nul +="<img src ='./img/fish.jpg'/>"
// }
// document.querySelector("#output").innerHTML = nul