let text ='{"employees":['+
'{"firstName":"Nirmal" , "lastName":"Singh"},'+
'{"firstName":"Mani" , "lastName":"Rathinam"},'+
'{"firstName":"Prakash" , "lastName":"Kumar"}]}';

let emp =JSON.parse(text);
console.log(emp.employees[1].firstName+ " "+ emp.employees[1].lastName);