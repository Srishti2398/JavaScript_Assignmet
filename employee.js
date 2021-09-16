let employee =[
    {
        name:"abc",
        age: 18,
        dob: "23/12/2004",
        salary: 5000,
    },
    {
         name:"pqr",
        age: 41,
        dob: "3/10/1980",
        salary: 700,
    },
    {
         name:"mno",
        age: 21,
        dob: "20/10/2001",
        salary: 900,
    },
    {
        name:"xyz",
       age: 20,
       dob: "20/10/2001",
       salary: 600,
    },
    {
        name:"rst",
       age: 50,
       dob: "20/10/1970",
       salary: 7000,
   },
    {
        name:"jkl",
        age: 44,
        dob: "23/12/1976",
        salary: 5000,
    }
    
]

/*var salaryBasedFilter = employee.filter(employee => employee.salary>5000);
console.log("filtered Salary",salaryBasedFilter);*/

/*function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, {});
    };
  }

let groupByAge = groupBy("age");

console.log("grouping by age",groupByAge(employee));

/*employee.map(item=>{
    if(item.age>45 && item.salary<5000){
        item.salary=item.salary*5;
        return item;
    }
})
console.log("updated list after increment",employee);*/




/*let emps = employee.filter( employee => (employee.age > 20 && employee.salary < 1000));
console.log(emps);*/

let empss=employee.map(item => {
    if(item.age>20 && item.salary<1000){
        item.salary = item.salary*5;
        return item;
    }
})
console.log(empss);