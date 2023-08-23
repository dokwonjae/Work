// 문제 풀이
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
// 입력 1 : love
// 입력 2 : 3
// 출력 : lovelovelove
// 입력함수 : let char = prompt("1개의 문자열이 입력된다.");
//           let num = Number(prompt("1개의 숫자가 입력된다."))

// let char = prompt("1개의 문자열이 입력된다");
// let num = Number(prompt("1개의 숫자가 입력된다."))
// let nul =""
// for(let i=1;i<=num;i++){
//     nul += char;
// }
// alert(nul)

// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// alert("!@#$%^&*()")

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// 힌트 : 특수문자 출력방법 : \\
// alert("C:\\Download\\hello.cpp");

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt("실수를 입력하세요"));
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59 (소수점 2자리수)
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let num = Number(prompt("실수를 입력하세요"));
// alert(num.toFixed(2));

// 6) 입력 : 125
//    출력 : 125 125 125
// let c = prompt()
// let nul ="";
// for(let i=0; i<3; i++){
//     nul += c;
//     nul += " ";
// }
// alert(nul)

// 자료형 : 배열 (간략설명)
// 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean/bool)
//          배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함), let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
//          인덱스번호
// 사용법 : 변수명[인덱스번호]
// 보충설명 : a[0] == 0번방에 값
// 예) a[0] = 1, a[1] = 2, ....

// 예제 7) 입력 = 1 2
//         출력 = 1 2
// 자바스크립트에서 문자열 자르기 함수 : .split("자를문자");
// 예) let arr = prompt("두 정수를 입력해 주세요").split(" ");
//      arr(배열), arr[0] = 1, arr[1] = 2
//      alert(arr[1] + " " + arr[0]); // 2 1

// 7) 입력 : A b
//    출력 : b A
// let arr = prompt("두 정수를 입력해 주세요").split(" ");
// alert(arr[1] + " " + arr[0]);

// 8) 입력 : 3:16
//    출력 : 3:16
// let a = prompt()
// alert(a)

// 9) 입력 : 2013.8.5
//    출력 : 2013.08.05
// 힌트 : 문자열 자르기 함수 : 문자열.split("자를문자");
// let b = prompt().split(".");
// alert(b[0]+".0"+b[1]+".0"+b[2])


// 10) 입력 : 000907-1121112
//     출력 : 0009071121112
// 방법1
// let c = prompt().split("-");
// let nul = ""
// for(let i = 0; i < 2; i++){
// nul += c[i];
// }
// alert(nul)
// 방법2
// let num = prompt("날짜를 입력해 주세요").split("-"); // 배열로 나옴
// let first = num[0]; // 000907
// let second = num[1]; // 1121112

// alert(first + second); 

// 11) 입력 : Programming is very fun!!
//      출력 : Programming is very fun!!
// let strChar = prompt("문자열을 입력하세요");
// alert(strChar);

// 12) 입력 : 1.414213
//     출력 : 1
// 방법 1
// let a = Number(prompt())
// alert(a.toFixed(0))
// 방법 2
// 문제가 실수라서 Number() 안됨 : split() 문자열만 잘림(숫자 안됨)
// let num = prompt("실수를 입력해 주세요").split(".");
// let first = num[0]; // 1
// let second = num[1]; // 414213
// alert(first); // 1

// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// 힌트 : Boy (문자열) : 1문자의 합 == 문자들의 배열
//      let arr = "Boy" -> arr[0] = "B", arr[1] = "o", arr[2] = "y";
// let arr = "Boy"
// alert(arr[0] + "\n" + arr[1] + "\n" + arr[2]);

// let s = prompt("문자열을 입력하세요");
// alert("'"+s[0]+ "'" + "\n"+"'"+s[1]+ "'"+"\n"+"'"+s[2]+ "'")

// 14) 두 정수의 합을 출력한다.
// 입력1 : 2147483648
// 입력2 : 2147483648
// 출력  : 4294967296
// let a = Number(prompt("입력1 : "));
// let b = Number(prompt("입력2 : "));
// alert("결과는 : "+a+b);

// 15) 입력 : 75254
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]
let arr = prompt("문자열을 입력해 주세요"); // 75254 (문자들의 배열 == 문자열)
// arr[0] = 7 , arr[1] = 5 ... arr[4] = 4
let arr2 = "[" + arr[0] + "0000]" + "\n"; // [ + 7 + 0000]
let arr3 = "[" + arr[1] + "000]" + "\n"; // [ + 5 + 000]
let arr4 = "[" + arr[2] + "00]" + "\n"; // [ + 2 + 00]
let arr5 = "[" + arr[3] + "0]" + "\n"; // [ + 5 + 0]
let arr6 = "[" + arr[4] + "]" + "\n"; // [ + 4 + ]

// 결과 출력
alert(arr2 + arr3 + arr4 + arr5 + arr6);