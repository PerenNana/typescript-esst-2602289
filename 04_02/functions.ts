export function Demo() {
  type VoidingFunction = () => void;
  type NumberFunction = (paramA: number, paramB: string) => number;

  const myFunction: VoidingFunction = () => {
    console.log("myFunction called!");
  };

  const myNumberFunction: NumberFunction = () => {
    return 6 + 5;
  }

  const otherFunc = (zahl: number): string => {
    return 'string';
  }

  myFunction();
  myNumberFunction(45, "test");
  otherFunc(45);
}
