export function Demo() {
  const numbersArray : number[] = [1, 2, 3];
  const stringsArray : string[] = ["hallo", "hallo2"];
  const nestedNumbersArray: (number | string)[][] = [[1, 2, "hallo welt"], [3, 4], [5, 6, 7]];
  const nestedNumbersArray2: Array<Array<number | string>> = [[1, 2, "hallo welt"], [3, 4], [5, 6, 7]];
}
