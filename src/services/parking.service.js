const PARKING_SIZE = parseInt(process.env.PARKING || 5);

const PARKING = [];

for (let i = 0; i < PARKING_SIZE; i++) {
  PARKING.push({ isAvailable: true, licensePlate: '' });
}

exports.getParkingSlotInfo = (index) => {
  if (index > PARKING.length) {
    return false;
  }
  return PARKING[index - 1];
};

exports.parkCar = (licensePlate) => {
  let flag = false;
  for (let i = 0; i < PARKING_SIZE; i++) {
    if (PARKING[i].isAvailable) {
      PARKING[i] = { isAvailable: false, licensePlate };
      flag = i + 1;
      break;
    } else {
      if (PARKING[i].licensePlate === licensePlate) {
        flag = `Already Parked in slot ${i + 1}`;
        break;
      }
    }
  }
  if (flag === false) {
    return flag;
  }
  return { isAvailable: false, licensePlate, slot: flag };
};

exports.unparkCar = (licensePlate) => {
  let flag = false;
  for (let i = 0; i < PARKING_SIZE; i++) {
    if (PARKING[i].licensePlate === licensePlate) {
      PARKING[i] = { isAvailable: true, licensePlate: '' };
      flag = { isAvailable: true, licensePlate, slot: i + 1 };
      break;
    }
  }
  return flag;
};
