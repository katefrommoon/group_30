const age2 = 18
const age3 = 60
const div = document.getElementById('d')
const checkAge = function(...age){
    age.forEach(elem => {
        if (elem && !isNaN(elem)){ // isNaN автоматом преобразовывает в Number
            if(elem < age2){
            div.innerHTML +="You don’t have access cause your age is " + elem + ". It’s less then " + age2 + '<br />';
        } else if(elem >= age2, elem < age3){
            div.innerHTML += "Welcome!" + '<br />';
        }else if(elem > age3){
            div.innerHTML += "Keep calm and look Culture channel" + '<br />';
        }else {
            div.innerHTML += "Technical work" + '<br />';
        }
    }
    else div.innerHTML += 'Not an integer value' + '<br />';
    })
}
checkAge(17,18,60,61,'0','','whooo')