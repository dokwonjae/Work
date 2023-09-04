// 1151
// let a = Number(prompt())
// if(a<10){
//     alert("small")
// }

// 1152
// let a = Number(prompt())
// if(a<10){
//     alert("small")
// }else{
//     alert("big")
// }

// 1153
// let a = prompt()
// let b = a.split(" ")
// if(b[0]==b[1]){
//     alert("=")
// }else if(b[0]>b[1]){
//     alert(">")
// }else{
//     alert("<")
// }

// 1154
// let a = prompt()
// let b = a.split(" ")
// if(b[0]>b[1]){
//     alert(b[0]-b[1])
// }else{
//     alert(b[1]-b[0])
// }

// 1155
// let a = Number(prompt())
// if(a % 7 === 0){
//     alert("multiple")
// }else{
//     alert("not multiple")
// }

// 1156
// let a = Number(prompt())
// if(a % 2 ===0){
//     alert("even")
// }else{
//     alert("odd")
// }

// 1157
// let a = Number(prompt())
// if(a>=50 && a<=60){
//     alert("win")
// }else{
//     alert("lose")
// }

// 1158
// let a = Number(prompt())
// if((a>=30 && a<=40) || (a>=60 && a<=70)){
//     alert("win")
// }else{
//     alert("lose")
// }

// 1159
// let a = Number(prompt())
// if((a>=50 && a<=70) || (a % 6 == 0)){
//     alert("win")
// }else{
//     alert("lose")
// }

// 1160
// let a = Number(prompt())
// if(a==1 || a== 3 || a== 5 || a==7){
//     alert("oh my god")
// }else{
//     alert("enjoy")
// }

// 1161
// let a = prompt()
// let b = a.split(" ")
// let n = ""
// if(b[0] % 2 ==0){
//     n += "짝수+"
// }else{
//     n += "홀수+"
// }

// if(b[1] % 2 ==0){
//     n += "짝수="
// }else{
//     n += "홀수="
// }

// if((b[0] + b[1]) % 2 ==0){
//     n += "짝수"
// }else{
//     n += "홀수"
// }
// alert(n)

// 1162
// let a = prompt()
// let b = a.split(" ")
// if(((parseInt(b[0])-parseInt(b[1])+parseInt(b[2])) % 100) % 10 ==0 ){
//     alert("대박")
// }else{
//     alert("그럭저럭")
// }

// 1163
// let a = prompt()
// let b = a.split(" ")
// if(((parseInt(b[0])+parseInt(b[1])+parseInt(b[2]))/ 100).toFixed(0) % 2 == 0 ){
//     alert("대박")
// }else{
//     alert("그럭저럭")
// }

// 1164
// let a = prompt()
// let b = a.split(" ")
// if(b[0]>=170 || b[1]>=170 || b[2]>=170){
//     alert("CRASH")
// }else{
//     alert("PASS")
// }

// 1165
// let a = prompt()
// let b = a.split(" ")
// c = parseInt(b[0])

// for문
// for(let i=c; i<90; i+=5){
//     b[1]++;
// }
// alert(b[1])

// if문
// if (parseInt(b[0]) < 90) {
//   if (parseInt(b[0]) % 10 == 0 || parseInt(b[0]) % 10 == 5) {
//     let c = (parseInt(b[1]) + parseInt((90 - parseInt(b[0])) / 5));
//     alert(c);
//   } else {
//     let c = (parseInt(b[1]) + parseInt((90 - parseInt(b[0])) / 5 + 1));
//     alert(c);
//   }
// }

// 1166
// let a = Number(prompt())
// if(a%400 == 0 || (a % 4 == 0 && a % 100 != 0)){
//     alert("Leap")
// }else{
//     alert("Normal")
// }

// 1167

// let num = prompt("3개의 숫자를 입력하세요");
// let number = num.split(" ");
// let num1 = Number(number[0]);
// let num2 = Number(number[1]);
// let num3 = Number(number[2]);
// let small, middle, big;
// if (num1 <= num2 && num1 <= num3) {
//   small = num1;
//   if (num2 <= num3) {
//     middle = num2;
//     big = num3;
//   } else {
//     middle = num3;
//     big = num2;
//   }
// } else if (num2 <= num1 && num2 <= num3) {
//   small = num2;
//   if (num1 <= num3) {
//     middle = num1;
//     big = num3;
//   } else {
//     middle = num3;
//     big = num1;
//   }
// } else {
//   small = num3;
//   if (num1 <= num2) {
//     middle = num1;
//     big = num2;
//   } else {
//     middle = num2;
//     big = num1;
//   }
// }

// console.log("작은 순서로 나열 :", small, middle, big);
// console.log("두 번째 수 :", middle);

// 1168
// let a = prompt()
// let b = a.split(" ")

// if(b[1] == 1 || b[1] == 2){
//     alert(2013 - (parseInt(parseInt(b[0])/10000) + 1900))
// }else {
//     alert(2013 - (parseInt(parseInt(b[0])/10000) + 2000))
// }

// 1170
// let a = prompt()
// let b = a.split(" ")
// if(parseInt(b[2]) >= 10){
//     alert(b[0]+b[1]+b[2])
// }else{
//     alert(b[0]+b[1]+0+b[2])
// }

// 1171
// let a = prompt()
// let b = a.split(" ")
// if(parseInt(b[2]) < 10){
//     b[2] = "0"+"0"+b[2]
// }else if(parseInt(b[2]) < 100){
//     b[2] = 0+b[2]
// }else{

// }

// if(parseInt(b[1]) < 10){
//     b[1] = 0+b[1]
// }else {

// }
// alert(b[0]+b[1]+b[2])

// 1172
// let a = prompt();
// let b = a.split(" ");
// let min, max, mid;
// if (Math.min(b[0], b[1], b[2]) == b[0]) {
//   min = b[0];
// } else if (Math.min(b[0], b[1], b[2]) == b[1]) {
//   min = b[1];
// } else {
//   min = b[2];
// }

// if (Math.max(b[0], b[1], b[2]) == b[0]) {
//   max = b[0];
// } else if (Math.max(b[0], b[1], b[2]) == b[1]) {
//   max = b[1];
// } else {
//   max = b[2];
// }

// if ((b[0] != max && b[0] != min)) {
//   mid = b[0];
// } else if ((b[2] != max && b[2] != min)) {
//   mid = b[2];
// } else{
//   mid = b[1];
// }
// alert(min+" "+mid+" "+max)

// 1173
// let a = prompt();
// let b = a.split(" ");

// if (parseInt(b[1]) < 30) {
//   b[0]--;
//   b[1] = 60 + (b[1] - 30);
// } else {
//   b[1] = parseInt(b[1]) - 30;
// }
// alert(b[0] + " " + b[1]);

// 1180
// let a = Number(prompt())
// let c
// if(a>99){
// c = parseInt(a/100) * 100
// a -= c
// }

// let b = (parseInt(a / 10) + a % 10 * 10 ) * 2

// if(b<=50){
//     alert(b+ "\n" + "GOOD")
// }else{
//     alert(b+ "\n"+ "OH MY GOD")
// }

// 1201
// let a = Number(prompt())
// if(a>0){
//     alert("양수")
// }else if (a==0){
//     alert(0)
// }else{
//     alert("음수")
// }

// 1202
// let a = Number(prompt());
// if (a >= 90) {
//   alert("A");
// } else if (a >= 80) {
//   alert("B");
// } else if (a >= 70) {
//   alert("C");
// } else if (a >= 60) {
//   alert("D");
// } else {
//   alert("F");
// }

// 1203
// let a = Number(prompt());
// if (a <= 10) {
//   alert("정상");
// } else if (a <= 20) {
//   alert("과체중");
// } else {
//   alert("비만");
// }

// 1204
// let a = Number(prompt());

// if(a>=1 && a<=99){

// if (a >= 11 && a <= 20) {
//   alert(a + "th");
// } else if (a % 10 == 1) {
//   alert(a + "st");
// } else if (a % 10 == 2) {
//   alert(a + "nd");
// } else if (a % 10 == 3) {
//   alert(a + "rd");
// } else {
//   alert(a + "th");
// }

// }else{

// }

// 1205
// let a = prompt();
// let b = a.split(" ");
// let first = parseInt(b[0]);
// let last = parseInt(b[1]);
// let max = 0;
// if (first + last > max) {
//   max = first + last;
// }
// if (first - last > max) {
//   max = first - last;
// }
// if (last - first > max) {
//   max = last - first;
// }
// if (first * last > max) {
//   max = first * last;
// }
// if (first / last > max) {
//   max = first / last;
// }
// if (last / first > max) {
//   max = last / first;
// }
// if (Math.pow(first, last) > max) {
//   max = Math.pow(first, last);
// }
// if (Math.pow(last, first) > max) {
//   max = Math.pow(last, first);
// }
// alert(max)

// 1206
// let a = prompt()
// let b = a.split(" ")
// if(b[0] % b[1] == 0){
//     alert(b[1] +"*" + b[0]/b[1] + "=" + b[0])
// }else if(b[1] % b[0] == 0){
//     alert(b[0] +"*" + b[1]/b[0] + "=" + b[1])
// }else{
//     alert("none")
// }

// 1207
// let a = prompt()
// let b = a.split(" ")
// let cnt = 0;

// if(b[0]==1){
//     cnt++;
// }
// if(b[1]==1){
//     cnt++;
// }
// if(b[2]==1){
//     cnt++;
// }
// if(b[3]==1){
//     cnt++;
// }

// if(cnt==1){
//     alert("도")
// }else if(cnt==2){
//     alert("개")
// }else if(cnt ==3){
//     alert("걸")
// }else if(cnt ==4){
//     alert("윷")
// }else{
//     alert("모")
// }

// 1210
// let a = prompt();
// let b = a.split(" ");
// let m1 = 400;
// let m2 = 340;
// let m3 = 170;
// let m4 = 100;
// let m5 = 70;
// let cnt = 0;

// if (b[0] == 1) {
//   cnt += m1;
// } else if (b[0] == 2) {
//   cnt += m2;
// } else if (b[0] == 3) {
//   cnt += m3;
// } else if (b[0] == 4) {
//   cnt += m4;
// } else if (b[0] == 5) {
//   cnt += m5;
// } else {

// }

// if (b[1] == 1) {
//     cnt += m1;
//   } else if (b[1] == 2) {
//     cnt += m2;
//   } else if (b[1] == 3) {
//     cnt += m3;
//   } else if (b[1] == 4) {
//     cnt += m4;
//   } else if (b[1] == 5) {
//     cnt += m5;
//   } else {

//   }

//   if(cnt>500){
//     alert("angry")
//   }else{
//     alert("no angry")
//   }

// 1212
// let a = prompt()
// let b = a.split(" ")
// if((Math.max(b[0],b[1],b[2]) * 2) < (parseInt(b[0]) + parseInt(b[1]) + parseInt(b[2]))){
//     alert("yes")
// }else{
//     alert("no")
// }

// 1214
// let a = prompt();
// let b = a.split(" ");
// if(b[1]==1 || b[1]==3 || b[1]==5 || b[1]==7 || b[1]==8 || b[1]==10 || b[1]==12){
// alert("31")
// }else if(b[1]==2){
//     if (b[0] % 400 == 0 || (b[0] % 4 == 0 && b[0] % 100 != 0)) {
//         alert("29")
//     } else {
//       alert("28");
//     }
// }else{
//     alert("30")
// }

// 1216
// let a = prompt()
// let b = a.split(" ")
// if(b[1]-b[2]>b[0]){
//     alert("advertise")
// }else if(b[1]-b[2]==b[0]){
//     alert("does not matter")
// }else{
//     alert("do not advertise")
// }

// 1218
// let a = prompt();
// let b = a.split(" ");
// let max = Math.max(b[0],b[1],b[2])
// let min = Math.min(b[0],b[1],b[2])
// let mid = parseInt(b[0])+parseInt(b[1])+parseInt(b[2])- max - min

// if (b[0] == b[1] && b[1] == b[2]) {
//   alert("정삼각형");
// } else if (b[0] == b[1] || b[0] == b[2] || b[1] == b[2]) {
//   alert("이등변삼각형");
// } else if(Math.pow(max,2) == Math.pow(mid,2) + Math.pow(min,2)){
//     alert("직각삼각형")
// } else if(max<mid+min){
//     alert("삼각형")
// }else{
//     alert("삼각형아님")
// }

// 1222
// let a = prompt();
// let b = a.split(" ");
// let c = 0

// if (parseInt(b[0]) < 90) {

//   if ((parseInt(b[0]) % 10) == 0 || (parseInt(b[0]) % 10) == 5) {
//     c = (parseInt(b[1]) + parseInt((90 - parseInt(b[0])) / 5));
//   } else {
//     c = (parseInt(b[1]) + parseInt((90 - parseInt(b[0])) / 5 + 1));
//   }
// }else{

// }

// if (parseInt(c) > parseInt(b[2])) {
//   alert("win");
// } else if (c == b[2]) {
//   alert("same");
// } else {
//   alert("lose");
// }

// 1224
// let a = prompt();
// let b = a.split(" ");
// if (parseInt(b[0]) / parseInt(b[1]) > parseInt(b[2]) / parseInt(b[3])) {
//   alert(">");
// } else if (parseInt(b[0]) / parseInt(b[1]) == parseInt(b[2]) / parseInt(b[3])) {
//   alert("=");
// } else {
//   alert("<");
// }

// 1226
// let a = prompt();
// let b = a.split("\n");
// let c1 = b[0].split(" ");
// let c2 = b[1].split(" ");

// let bonus = c1[6];
// let cnt = 0;
// let bo = 0;

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if (c1[i] == c2[j]) {
//       cnt++;
//     } 
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   if (parseInt(c2[i]) == parseInt(bonus)) {
//     bo++;
//   }
// }

// if (cnt == 6) {
//   alert(1);
// } else if (cnt == 5 && bo == 1) {
//   alert(2);
// } else if (cnt == 5) {
//   alert(3);
// } else if (cnt == 4) {
//   alert(4);
// } else if (cnt == 3) {
//   alert(5);
// } else {
//   alert(0);
// }

// 1228
// let a = prompt();
// let b = a.split(" ");
// let pm = (parseFloat(b[0]) - 100) * 0.9
// let bmi = ((b[1]-pm) * 100 / 63).toFixed(2)
// alert(bmi)
// alert(Math.floor(bmi))
// if(bmi<=10){
//     alert("정상")
// }else if(bmi<=20){
//     alert("과체중")
// }else{
//     alert("비만")
// }

// let a = 20.99
// alert(parseInt(a))
// alert(a.toFixed(1))

// 1229
// let a = prompt();
// let b = a.split(" ");
// let pm = 0
// if(b[0]<150){
//     pm = (b[0]-100)
// }else if(b[0]<160){
//     pm = (b[0]-150) / 2 + 50
// }else{
//     pm = (b[0]-100) * 0.9
// }

// let bmi = (b[1]-pm) * 100 / pm

// if(bmi<=10){
//     alert("정상")
// }else if(bmi<=20){
//     alert("과체중")
// }else{
//     alert("비만")
// }

// 1230
// let a = prompt();
// let b = a.split(" ");

// if(b[0]>170 && b[1]>170 && b[2]>170){
//     alert("PASS")
// }else if(b[0]<=170){
//     alert("CRASH " + b[0])
// }else if(b[1]<=170){
//     alert("CRASH " + b[1])
// }else if(b[2]<=170){
//     alert("CRASH " + b[2])
// }else{

// }

// 1231
let a = prompt()

let pl = a.split("+")
let mi = a.split("-")
let mu = a.split("*")
let di = a.split("/")

alert(pl[0]==Number)
alert(parseInt(pl[0])+parseInt(pl[1]))
