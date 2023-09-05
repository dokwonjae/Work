// 1001
// alert("Hello")

// 1002
// alert("Hello World")

// 1003
// alert("Hello\nWorld")

// 1004
// alert("\'Hello\'")

// 1005
// alert("\"Hello World\"")

// 1006
// alert("\"!@#$%^&*()\"")

// 1007
// alert("\"C:\\Download\\hello.cpp\"")

// 1008
// alert("\u250C\u252C\u2510\n├┼┤\n└┴┘")

// 1010
// let a = Number(prompt())
// alert(a)

// 1011
// let a = prompt()
// alert(a)

// 1012
// let a = Number(prompt())
// alert(a)

// 1013
// let a = prompt()
// alert(a)

// 1014
// let a = prompt()
// let b = a.split(" ")
// alert(b[1]+" "+b[0])


// 1015
// let a = Number(prompt())
// alert(a.toFixed(2))

// 1017
// let a = parseInt(prompt())
// alert(a+" "+a+" "+a)

// 1018
// let a = prompt()
// let b = a.split(":")
// alert(b[0]+":"+b[1])

// 1019
// let a = prompt()
// let b = a.split(".")
// if (b[1]<10){
//     b[1]="0"+b[1]
// }
// if (b[2]<10){
//     b[2]="0"+b[2]
// }
// alert(b[0]+"."+b[1]+"."+b[2])

// 1020
// let a = prompt()
// let b = a.split("-")
// alert(b[0]+b[1])

// 1021
// let a = prompt()
// alert(a)

// 1022
// let a = prompt()
// alert(a)

// 1023
// let a = prompt()
// let b = a.split(".")
// alert(b[0]+'\n'+b[1])

// 1024
// let a = prompt()
// let b = a.split("")
// alert('\''+b[0]+'\''+'\n\''+b[1]+'\''+'\n\''+b[2]+'\'')

// 1025
// let a = Number(prompt())
// let b = (a/10000)
// let c = (a/1000)
// let d = (a/100)
// let e = (a/10)
// let f = (a/1)

// let b1 = parseInt(b)*10000
// let c1 = parseInt(c)*1000 - b1
// let d1 = parseInt(d)*100 - b1 - c1
// let e1 = parseInt(e)*10 - b1 - c1 -d1
// let f1 = parseInt(f)*1 - b1 - c1 -d1 -e1
// alert(b1+"\n"+c1+"\n"+d1+"\n"+e1+"\n"+f1)

// let a = prompt()
// let b = a.split("")
// alert("["+b[0]*10000+"]"+"\n"+"["+b[1]*1000+"]"+"\n"+"["+b[2]*100+"]\n["+b[3]*10+"]\n["+b[4]+"]")

// 1026
// let a = prompt()
// let b = a.split(":")
// alert(b[1])

// 1027
// let a = prompt()
// let b = a.split(".")
// alert(b[2]+'-'+b[1]+'-'+b[0])

// 1028
// let a = parseInt(prompt())
// alert(a)

// 1029
// let a = parseFloat(prompt())
// alert(a)

// 1030
// let a = Number(prompt())
// alert(a)

// 1031
// let a = Number(prompt())
// alert(a.toString(8))

// 1032
// let a = Number(prompt())
// alert(a.toString(16))

// 1033
// let a = Number(prompt())
// alert(a.toString(16).toUpperCase())


// 1034
// let a = Number(prompt())
// let b = parseInt(a, 8).toString(10)
// alert(b)

// 1035
// let a = prompt()
// let b = parseInt(a, 16).toString(8)
// alert(b)


// 1036
// let a = prompt()
// alert(a.charCodeAt(0))


// 1037
// let a = (prompt())
// alert(String.fromCodePoint(a))


// 1038
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(b[0]+b[1])


// 1039
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(b[0]+b[1])


// 1040
// let a = prompt()
// alert(-a)

// 1041
// let a = prompt()
// alert(String.fromCharCode(a.charCodeAt(0)+1))

// 1042
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(parseInt(b[0]/b[1]))

// 1043
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(b[0]%b[1])


// 1044
// let a = Number(prompt())
// alert(a+1)

// 1045
// let a = prompt()
// let b = a.split(" ").map(Number)
// let add = b[0] + b[1]
// let minus = b[0] - b[1]
// let multiply = b[0] * b[1]
// let di = b[0] % b[1]
// let division = b[0] / b[1]
// alert(add+'\n'+ minus+'\n'+multiply+'\n'+di+'\n'+division.toFixed(2))

// 1046
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(b[0]+b[1]+b[2]+'\n'+((b[0]+b[1]+b[2])/3).toFixed(1))


// 1047
// let a = Number(prompt())
// alert(a<<1)

// 1048
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(b[0]<<b[1])

// 1049
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]>b[1]))

// 1050
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]==b[1]))

// 1051
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]<=b[1]))

// 1052
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]!=b[1]))

// 1053
// let a = prompt()
// alert(Number(!a))

// 1054
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]==1 && b[1]==1))

// 1055
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]==1 || b[1]==1))

// 1056
// let a = prompt()
// let b = a.split(" ").map(Number)
// alert(Number(b[0]!=b[1]))

// 1057
let a = prompt()
let b = a.split(" ").map(Number)
alert(Number(b[0]!=b[1]))

// 1058

// 1059

// 1060

// 1061

// 1062

// 1063

// 1064

// 1065

// 1066

// 1067

// 1068

// 1069

// 1070

// 1071

// 1072

