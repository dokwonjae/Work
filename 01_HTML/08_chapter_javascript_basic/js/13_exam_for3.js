// 1) // for문 안에 if문으로 짝수체크해서 더하기
// 입력 : 없음
// 출력 : 1 ~ 100 까지 합계 구하는데
//       짝수의 합계를 구해서 출력하세요.

// let sum = 0;
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         sum += i;
//     }
// }
// document.querySelector("#output").innerHTML="값: " + sum;

// 2) // 입력 : 없음
// 출력 : 1 ~ 100 까지 합계 구하는데
//       3의 배수의 합계를 구해서 출력하세요.
// 결과 : 1683
// let sum = 0;
// for(let i=1; i<=100; i++){
//     if(i%3==0){
//         sum += i;
//     }
// }
// document.querySelector("#output").innerHTML="값: " + sum;

// 3) 1부터 n까지 합 구하기
// 입력예시 : 100
// 출력예시 : 5050

// let a = Number(prompt("숫자를 입력하세요"));
// let sum = 0;
// for(let i=1; i<=a; i++){
//     sum += i;
// }
// document.querySelector("#output").innerHTML="값: " + sum

// TODO) hard **
// 4) First Special Judge (Test)
// 10개의 수 중 5의 배수가 있으면 그 중 하나만 출력하고, 없다면 0을 출력한다.
// 입력예시 : 1 2 3 4 5 6 7 8 9 10
// 출력예시 : 5
// 힌트 : 입력값 : .split("구분자") : 문자열 자르기 함수
// 힌트 : 1) 숫자배열 반복문 실행해서 5의 배수 있으면 출력; break;
//       2) 만약에 5의 배수 1개도 없다면(카운트변수 === 0) "0" 출력 
//         (반복문 내부에 5의 배수가 있을때 마다 카운트변수 1증가)
// 방법 1
let num = prompt("문자 2개를 입력하세요").split(" ")//.map(Number); // 숫자 배열
let cnt = 0;
// // let a = Number(prompt())

for(let i = 0; i<=num.length; i++){

if(num[i] % 5 == 0){
    cnt++;
    // document.querySelector("#output").innerHTML = num[i]
    console.log(num[i]);
    break;
} 
}
if(cnt==0){
    // document.querySelector("#output").innerHTML = 0
    console.log(0);
}
// 방법 2
// let num = prompt("문자 2개를 입력하세요").split(" ").map(Number); // 숫자 배열
// // 카운트 변수 초기화
// let count = 0;

// // 반복문
// // TODO : 1) 숫자배열 반복문 실행해서 5의 배수 있으면 출력; break;
// // 배열 : 여러개의 값을 저장하는 공간 , 배열의 크기 : length
// for(let i=0; i<num.length; i++) {
//     // 5의 배수 판단
//     if( num[i] % 5 === 0) {
//         // 출력
//         document.querySelector("#output").innerHTML = num[i]; // 5의 배수 출력
//         // 카운팅 변수 : 1증가 (5의 배수이므로)
//         count = count + 1;
//         // 강제 중단
//         break;
//     }
// }
// // TODO: 2) 만약에 5의 배수 1개도 없다면(카운트변수 === 0) "0" 출력 
// // TODO: (반복문 내부에 5의 배수가 있을때 마다 카운트변수 1증가)
// // 5의 배수가 숫자 배열에 1개도 없으면 : count === 0 임
// if(count === 0) {
//     document.querySelector("#output").innerHTML = "0";
// }


// 5) 1부터 n까지 중 짝수의 합 구하기
// 입력예시 : 5
// 출력예시 : 6
// let a = Number(prompt())
// let sum =0;
// for(let i=1;i<=a;i++){
// if(i%2==0){
//     sum += i
// }
// }
// document.querySelector("#output").innerHTML = sum

// 6) 두 수 사이의 홀수 출력하기
// 입력   : 2 
// 입력 2 : 7
// 출력예시 : 3 5 7

// let a = Number(prompt())
// let b = Number(prompt())
// let nul ="";
// for(let i=a;i<=b;i++){
//     if(i%2==1){
//         nul += i +" "
//     }
// }
// document.querySelector("#output").innerHTML = nul