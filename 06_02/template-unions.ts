export function Demo() {
  // Template Litteral Schreibweise 
  type VehicleType = 'CAR' | 'BUS' | 'TRUCK';
  type VehicleId = `T_${VehicleType}_${number}`;
  let serialNumberCar: VehicleId = "T_CAR_599";
  let serialNumberTruck: VehicleId = "T_TRUCK_2399";
  let serialNumberBus: VehicleId = "T_BUS_35";
}
