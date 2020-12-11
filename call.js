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
    salary: 425000
}

normalPerson.chargeBill.call(heroPerson, 900 , 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000 , 300, 30);

console.log(heroPerson.salary);