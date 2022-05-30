console.clear()
const prompt = require("prompt-sync")();
let n1 = prompt ("Você conhece a vítima?")
let n2 =  prompt ("Você esteve na R: Alexandre no dia 4/08?")
let n3 = prompt ("Você teve desavenças com a vítima?")
let n4 = prompt ("Você conhece Mikalateia?")
let n5 = prompt ("Você matou a vítima?")
if (n1 == "sim"|| n1 == "Sim"){n1=1}
else {n1=0}
if (n2 == "sim" || n2== "Sim" ){n2=1}
else {n2=0}
if (n3 == "sim" || n3== "Sim" ){n3=1}
else {n3=0}
if (n4 == "sim" || n4== "Sim" ){n4=1}
else {n4=0}
if (n5 == "sim" || n5== "Sim" ){n5=1}
else {n5=0}
if (n1+n2+n3+n4+n5>=4){console.log("Você é o culpado")}
else if(n1+n2+n3+n4+n5==3) {console.log ("Você é suspeito")}
else {console.log ("Você é inocente")}