// 1 출력만을 하고자 한다면 이렇게 두 줄이면 된다
// parseInt 함수를 사용하지 않아도 정수로 인식해서 사칙연산 가능(하는게 더 좋음)
// alert(273 * 52)
// alert(273 % 52)

// 2
// 문자열을 입력받는 변수 2개를 선언
// 빈공간을 가지고 있는 문자열에 입력받은 변수 두개를 넣기 (중간에 공백 포함)
// let c = ""
// let a = prompt("입력 :");
// let b = prompt("입력 2 :");
// c = a + " " + b
// alert(c)

// 3
// 변수 a에 19를 넣으면 성인입니다 출력 
// 다른 숫자를 넣으면 아무 것도 출력하지 않음
// let a = 19
// if(19==a){
//     alert("성인입니다.")
// }else{

// }

// 4
// 변수 a에 19를 넣으면 성인입니다 출력 
// 변수 a에 18를 넣으면 청소년입니다 출력 
// 변수 a에 17이하의 수를 넣으면 미성년자 입니다 출력
// 그 외의 조건에 해당되는 수 넣으면 아무것도 출력하지 않음
// let a =19
// if(19==a){
//     alert("성인입니다.")
// }else if(18==a){
//     alert("청소년입니다")
// }else if(17>=a){
//     alert("미성년자입니다")
// }else{

// }

// 5
// for문 반복문을 이용하여 1부터 10까지의 합 출력
// sum이라는 변수에 0을 넣고 1부터 10까지 모두 더함
// sum 출력
// let sum=0;
// for(let i =1;i<=10;i++){
//     sum+=i;
// }
// alert(sum)