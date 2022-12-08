class Hamster {
    constructor(name, price = 15, owner ="") {
        this.name = name;
        this.price = price;
        this.owner = owner;
    }

    wheelRun(){
        console.log("squeek squeek");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}

const hamster1 = new Hamster('');
// console.log(hamster1.wheelRun());
// console.log(hamster1.eatFood());
// console.log(hamster1.getPrice());

class Person extends Hamster{
    constructor(name,price,owner,age = 0,height = 0,weight = 0,mood = 0,hamsters=[],bankAccount=0){
        super(name,price,owner);
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = [];
        this.bankAccount = bankAccount;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    eat(){
        return `${this.weight++},${this.mood++}`;
    }
    exercise(){
        return this.weight--;
    }
    ageUp(){
        return(
            `${this.age++},${this.height++},${this.weight++},${this.mood--},${this.bankAccount +=10}`);
        }
    
        buyHamster(hamster){
            //console.log(this.mood+=10);
            //console.log(this.getPrice());
            //console.log(this.bankAccount);
            //console.log(this.hamsters.push(hamster));
            return (`${this.hamsters.push(hamster)},${this.mood+=10},${this.bankAccount - this.price}`);

        }
}

const Timmy = new Person();
Timmy.age = 5;
Timmy.weight = 5;

Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
//Timmy.age = 9;

//console.log(Timmy.age);
console.log("Eat 5 times " +Timmy.eat());
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
console.log("Losing weight by exercise "+Timmy.exercise());
//console.log(Timmy.ageUp());
console.log("Price of Hamster "+Timmy.buyHamster('hamster1'));
Timmy.hamsters.push('Gus');
console.log(Timmy.hamsters);
Timmy.age = 9;
const Gus = new Hamster();
Gus.owner = 'Timmy';
//console.log('Timmy eat '+ Timmy.eat());
Timmy.age = 15;
Timmy.eat();
Timmy.eat();
Timmy.exercise();
Timmy.exercise();
//console.log(Timmy.exercise());
console.log("Timmy's weight "+Timmy.exercise());


class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
         
    }
    
}
class Chef extends Dinner{
    constructor(appetizer,entree,dessert){
      super(appetizer,entree,dessert);

      
    }
    getDinner(a1,a2,a3){
      return `Dinner is ${a1=this.appetizer},${a2=this.entree},${a3=this.dessert}`
    }

}

const dinner1 = new Chef('boneless','lasagna','ice cream');
const dinner2 = new Chef('edamame','sushi','mochi');
const dinner3 = new Chef('quesadilla','steak','cheesecake');
console.log(dinner1.getDinner());
console.log(dinner2.getDinner());
console.log(dinner3.getDinner());
