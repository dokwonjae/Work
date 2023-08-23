// 문제 풀이
// 1) 증감연산자를 활용해서 화면 출력하세요
// 출력방법 : alert, console.log()
// 입력 : 없음
// 출력 : 10
//        11
//        12

// let a = 10;
// alert(a++);
// alert(a++);
// alert(a++);

// 2) 공식 : price = 1500, 
//           num = 3, 
//           pay = 10000
//  잔돈계산 공식 = pay - price * num;
//  출력 : - 개당 가격 : 1500원
//        - 구매 개수 : 3개
//        - 지불 금액 : 10000
//        - 거스름돈은 5500원입니다

let price = 1500; // 개당 가격
let num = 3;     // 구매 개수
let pay = 10000; // 지불 금액
let change = pay - price * num //거스름돈
// alert("개당 가격 : " + price + "원");
// alert("구매 개수 : " + num + "개");
// alert("지불 금액 : " + pay + "원");
// alert("거스름돈은 " + change + "원");

// 출력방법 : console.log
// TODO: 문자열 붙이기 : 문자열 + 숫자 => 문자열 + 문자열 변경됨
console.log("- 개당 가격 : " + price + "원");
console.log("- 구매 개수 : " + num + "개");
console.log("- 개당 가격 : " + pay + "원");
console.log("- 거스름돈은 " + price + "원입니다");

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하세요
// 입력 1 : a
// 입력 2 : b
// 출력 : b a

// 사용법 : let 변수명 = prompt("문자열"); // 문자열 (입력대화상자의 문구)
//          입력받은 글자가 변수명에 저장됨
// let char1 = prompt("1개의 문자가 입력된다."); // a
// let char2 = prompt("1개의 문자가 입력된다."); // b

// // 결과 출력 : char + " " + char1
// alert(char2 + " " + char1);

// 4) 입력받은 정수를 줄을 바꿔 3번 출력한다.
// 단, 줄바꿈 특수문자(\n)를 사용해서 한번에 출력하세요
//      (alert, console.log 1번만 사용)
// 힌트 : "\n"(줄바꿈), 문자열 붙이기 (+)
// 입력 : 3
// 출력 : 3
//       3
//       3
// let a = prompt("정수를 입력해 주세요")
// alert(a + "\n" + a + "\n" + a)

// 5) 단어 2개가 입력된다.
// 2개를 거꾸로 붙여서 출력하세요
// 입력 1 : hello
// 입력 2 : world
// 출력 : worldhello

// let char1 = prompt("단어를 입력하세요"); // hello
// let char2 = prompt("단어를 입력하세요"); // world
// 결과 출력
// alert(char2+char1);

// 6) 입력 1: hello 
//    입력 2 : world
//    출력 : hello
//          world
// let a = prompt("입력 1");
// let b = prompt("입력 2");
// alert(a + "\n" + b);

// 7) 두 정수의 합을 출력하세요
// 입력 1: 123
// 입력 2: -123
// 출력 : 0
// 힌트 : Number(prompt("문자열")) (문자열 -> 숫자)
// let a = Number(prompt("입력 1"))
// let b = Number(prompt("입력 2"))
// alert(a+b);