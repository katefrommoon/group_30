//first JS test for Postman
let jsonData = pm.response.json(); //берем данные из JSONа респонса
let salary_1_5 = jsonData.family.u_salary_1_5_year //берем из JSONа данные о ЗП
let req = request.data; //берем данные из запроса
let exp_salary_1_5 = req.salary * 4; //знаем, что на сервере входные данные должны умножаться на 4
console.log ("req_salary =  ", req.salary);
pm.environment.set("salary", exp_salary_1_5); //хз чо это

pm.test("Check salary", function () { //проводим тест и сравниваем ожидаемый и фактический результат
        pm.expect(exp_salary_1_5).to.eql(salary_1_5); 
});