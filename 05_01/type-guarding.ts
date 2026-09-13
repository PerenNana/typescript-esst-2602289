type SomeValueFunc = () =>
  | string
  | number
  | { name: string };

const getSomeValue: SomeValueFunc = () => {
  return 3;
};

export function Demo() {
  let value = getSomeValue();

  // Type-guarding
  if (typeof value !== 'number' && typeof value !== 'string') {
    console.log(value.name);
  }
  const myObject: { foobar?: { foo: boolean } } = {};

  if (myObject.foobar) {
    console.log(myObject.foobar.foo);
  }
}
