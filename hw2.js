// if (true && true && false){
//     console.log ("1")
// }else {
//     console.log ("2")
// }


const age2 = 18
const age3 = 60
const checkAge = function(age){
    // age = Number(age) //переводим age в Number, если вдруг данные пришли строкой, к примеру
    if (age && !isNaN(age)){ // isNaN автоматом преобразовывает в Number
    // if (age) { //в случае, если age не Number, функция не будет выполняться или будет выполняться то, что в else
        if(age < age2){
            alert ("You don’t have access cause your age is " + age + ". It’s less then " + age2)
        } else if(age >= age2, age < age3){
            alert ("Welcome!")
        }else if(age > age3){
            alert ("Keep calm and look Culture channel")
        }else {
            alert ("Technical work")
        }
    }
    else alert ('Not an integer value')
}
let a = prompt ('Enter your age')
checkAge(a)
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge(61)
// checkAge('35')
// checkAge('ass')
// checkAge('0')
// checkAge('')