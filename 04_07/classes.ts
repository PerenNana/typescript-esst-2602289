class Person {
  static field = "Hey!";

  // public steht hier für die Sichtbarkeit dieser Variable
  // public name: string;

  constructor(public name: string) {
    this.name = name;
  }
}

export function Demo() {
  const person = new Person("Ted");
  console.log(person.name); // output
}

Demo();
