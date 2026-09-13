interface IBasePerson {
  name: string;
}

interface IPerson extends IBasePerson {
  name: string;
  sayHello: () => void;
}
interface IAge {
  age: number;
}

class Person implements IPerson, IAge{
  constructor(public name: string, private id: string, public age: number) {}

  sayHello() {
    console.log('Hello' + this.id)
  }
}

export function Demo() {
  const person = new Person('Paul', "67", 45);
}
