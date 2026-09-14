export function Demo() {
  const myObject = { price: 300 };
  const typeOfTest = typeof myObject;

  type MyObjectType = typeof myObject;

  const myString = 'hello';
  type MyStringType = typeof myString; 
  // type of myString is 'hello' 

  const myString2 = 'hello';
  type MyStringType2 = typeof myString2
  // type of myString2 is string

  console.log(typeOfTest);
}

Demo();
