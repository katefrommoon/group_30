function ololo (q1, q2){
    console.log (`Sum = ${q1 + q2}`)
    console.log ("Sum = ", Number(q1) + Number(q2))
}
ololo (2,3)

function upyachka (...arguments){ //суммирует при любом количестве аргументов в функции
    let result = 0
    for (let arg of arguments){
        result +=arg
    }
    console.log (result)
}
upyachka (4,1,7,10)

names = ['Andrew', 'Kate', 'Max', 'Irina']

function names_editor(person_name){
    let name_1 = "Hello " + person_name + " !"
    console.log(name_1)
}
for (let i=0; i<names.length; i++){
    names_editor(names[i])
}



let summ = (n1, n2) => {console.log (`Summ= ${n1+n2}`)} //стрелочная функция, вариант написания функции
summ (5,10)

function egg(){} //прототипы
egg.prototype.method_1 = function(){
    console.log ('method_1')
}
egg.prototype.method_2 = function(s1,s2){
    console.log (`method_2 = ${s1+s2}`)
}
let chiken = new egg () //chiken экземпляр класса egg, чтобы это не значило
chiken.method_1()
chiken.method_2(2,4)


let p1=4;
let f3 = (p1 > 10) ? //тернарный оператор
    (pp1, pp2) => console.log(pp1 + pp2):
    (pp1, pp2) => console.log(pp1 - pp2);
f3(5,2)