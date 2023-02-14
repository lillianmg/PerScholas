class Governor { 
    constructor(name, age, gender)
    {this.name = name;
    this.age = age;
    this.gender = gender;
    }
    getName() { return this.name;}
    getAge() {return this.age;}
    getGender() {return this.gender;}

    static passLaw() {
      console.log('Your law has been passed!');
    }
   }

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    eat(food, quantity) {
      return `${this.name} has eaten ${quantity} ${food}`;
    }
  
    sleep(duration) {
      return `${this.name} has slept for ${duration} hours`;
    }
  
    communicate(method, message) {
      return `${this.name} has communicated "${message}" using ${method}`;
    }
  }
  
  class PostalWorker extends Person {
    constructor(name, age, gender, jobTitle) {
      super(name, age, gender);
      this.jobTitle = jobTitle;
    }
  
    deliverMail(address) {
      return `${this.name}, ${this.jobTitle}, has delivered mail to ${address}`;
    }
  
    sortPackages(packages) {
      return `${this.name}, ${this.jobTitle}, has sorted ${packages} packages`;
    } 
  }
  
  class Chef extends Person {
    constructor(name, age, gender, jobTitle) {
      super(name, age, gender);
      this.jobTitle = jobTitle;
    }
  
    prepareFood(dish) {
      return `${this.name}, ${this.jobTitle}, has prepared ${dish}`;
    }
  
    cookFood(dish) {
      return `${this.name}, ${this.jobTitle}, has cooked ${dish}`;
    } 
   }
  
  const postman1 = new PostalWorker("John Doe", 40, "male", "Postman");
  const postman2 = new PostalWorker("Jane Doe", 35, "female", "Postwoman");
  const chef1 = new Chef("Sam Smith", 30, "male", "Head Chef");
  const chef2 = new Chef("Samantha Jones", 28, "female", "Sous Chef");
  
  console.log(postman1.deliverMail("123 Main St"));
  console.log(postman2.sortPackages(20));
  console.log(chef1.prepareFood("pizza"));
  console.log(chef2.cookFood("pasta"));
  console.log(chef1.eat("salad", 1));
  console.log(chef2.sleep(8));
  console.log(postman1.communicate("speaking", "Hello, world!"));
  console.log(Governor.passLaw());
