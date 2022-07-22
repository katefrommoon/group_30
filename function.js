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
    console.log (name_1)
}

for (let i=0; i<names.lenght; i++){
    names_editor(names[i])
}