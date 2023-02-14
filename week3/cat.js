class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  determineAge() {
    return this.age * 15;
  }
  favoriteToy() {
    return this.color + ' ball'
  }

  chooseNickname() {
    return this.name + ' socks'
  }}
const cat1 = new Cat('Jeremy', 2, 'black');
const cat2 = new Cat('Lulu', 3, 'white');

console.log(cat1);
console.log(cat2.determineAge());
console.log(cat1.determineAge());
console.log(cat2.favoriteToy());
console.log(cat1.chooseNickname());
