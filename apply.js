const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'hero',
    lastName: 'alam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'zero',
    lastName: 'kalam',
    salary: 45000
}

normalPerson.chargeBill.apply(heroPerson,[3000, 300, 30] );
console.log(heroPerson.salary);


//object er vitor ekta method ache eta k dhar kore 
//onno ekta jaygay use kora jay call, apply, bind diye
//interview question call r apply difference ki?
// jodi amar object er vitor method thake r jodi onno
//ekta object er vitor apply korte chai 
// sei khetre call apply r bind use korte pari
