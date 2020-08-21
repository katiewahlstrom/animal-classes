class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.sound} makes a noise.`);
  }
  sayName() {
    console.log(`My name is ${this.name}.`);
  }
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.name = name;
    this.sound = sound;
    this.breed = breed;
  }
  get myName() {
    return this.name;
  }
  set myNameIs(newName) {
    this.name = newName;
  }
  listBreed() {
    console.log(this.breed);
  }
}

let d = new Dog("Roo", "yippity, yippity", "Cavelier");
console.log(d);
d.speak();
d.sayName();
d.listBreed();

let c = new Dog("Rover", "Arf", "Lab");
console.log(c);
c.speak();
c.sayName();
c.listBreed();

d.myNameIs = "Roo Roo";
console.log(d);
d.sayName();
