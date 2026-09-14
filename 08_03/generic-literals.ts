export function Demo() {
  type PossibleTypes = "CAR" | "BUS";
  // <"BUS">
  type VehicleId = `ID_${PossibleTypes}_${number}`;
  
  type VehicleTypeGeneric<VehicleType extends string> = `ID_${VehicleType}_${number}`;
  type VehicleBusId = VehicleTypeGeneric<"BUS">;
  type VehicleCardId = VehicleTypeGeneric<"CAR">;

  const busId: VehicleId = "ID_BUS_5";
  const carId: VehicleId = "ID_CAR_01";
}
