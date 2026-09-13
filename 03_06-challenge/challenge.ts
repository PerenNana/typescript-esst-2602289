export function Challenge() {
  type MyType = string | false | (string | number)[]
  let foo: MyType = "Hello!" ;// fasle (nicht true), array (string oder zahl enthält);
  foo = false;
  foo = ["test", 100];
}
