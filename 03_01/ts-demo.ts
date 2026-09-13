export function Demo() {
  let price = 100;

  // Konstante-Umschreibung problematisch in ts
  const priceString = price + " EUR";
  priceString = "hallo";
}
