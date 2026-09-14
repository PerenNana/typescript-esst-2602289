export function Demo() {
  type Product<Details = Record<string, string | number>> = {
    name: string;
    details: Record<string, string | number>;
  };

  type FoodProduct = Product<{
    weight: number;
    origin: string;
  }>;

  const f: FoodProduct = {
    name: 'Banana',
    details: {
      weight: 200,
      origin: 'Columbia',
    },
  };

  const p: Product = {
    name: "Babyphone",
    details: {
      id: "EFCDF1324",
      weight: 500,
    },
  };
}
