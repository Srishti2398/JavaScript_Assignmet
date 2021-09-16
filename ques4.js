
const person = {
    firstName: 'John',
    lastName: 'Harris',
    address: {
        city: 'New York',
        state: 'CA',
        country: 'USA'
    }
};

//Copy using assign(shallow copy)

/*let copiedperson = Object.assign({}, person);
copiedperson.firstName = 'Demon';

copiedperson.address.city = 'Chicago';
copiedperson.address.state = 'asadsd';

console.log(person);*/


/*let copiedperson_1 = person;
copiedperson_1.firstName = 'Marry';
console.log(person); */


//copy object using JSON and Stringify(deep copy)

let copiedperson_2 = JSON.parse(JSON.stringify(person));
copiedperson_2.firstName = 'Jake';

copiedperson_2.address.city = 'Paris';
copiedperson_2.address.state = 'Paris';

console.log(person);

//copy using spread

/*let copiedperson_3 = { ...person };
console.log(copiedperson_3);*/