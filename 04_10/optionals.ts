type Restaurant = {
  name: string;
  location?: string;
  priceRange: "low" | "normal" | "high";
  comment?: string;
};

export function Demo() {
  const thaiRestaurant: Restaurant = {
    name: "Thai Mo",
    priceRange: "normal",
    comment: "Lecker!",
  };

  const GermanRestaurant: Partial<Restaurant> = {
    
  };
}
