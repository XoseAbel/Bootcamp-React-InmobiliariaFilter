export const filterProperties = (property: any, filter: any) => {
  function validateFilter(filter: any, amount: any) {
    return filter.length === 0 || filter.includes(amount + '');
  }
  return (
    validateFilter(filter.bath, property.bathroom_amount) &&
    validateFilter(filter.rooms, property.room_amount) &&
    validateFilter(filter.parking, property.parking_lot_amount) &&
    validateFilter(filter.type, property.type.name)
  );
  // let resultBath = true;
  // let resultRoom = true;
  // let resultParking = true;
  // let resultType = true;
  // if (filter.bath.length > 0) {
  //   resultBath = filter.bath.includes(property.bathroom_amount + '');
  // }
  // if (filter.rooms.length > 0) {
  //   resultRoom = filter.rooms.includes(property.room_amount + '');
  // }
  // if (filter.parking.length > 0) {
  //   resultParking = filter.parking.includes(property.parking_lot_amount + '');
  // }
  // if (filter.type.length > 0) {
  //   resultType = filter.type.includes(property.type.name + '');
  // }
  // let result = resultBath && resultRoom && resultParking && resultType;
  // return result;
};
