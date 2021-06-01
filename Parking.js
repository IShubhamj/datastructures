class ParkingLot {
  constructor(slots) {
    this.slots = [];
    for (let slot = 1; slot <= slots; slot++) {
      this.slots.push({ name: slot, carId: null });
    }
  }

  getSlots() {
    return this.slots.map((slot) => {
      if (slot.carId) {
        return slot.carId;
      } else {
        return null;
      }
    });
  }

  park(carId) {
    let emptySlots = this.slots.filter((slot) => !slot.carId);
    if (!emptySlots.length) {
      return false;
    }
    let emptySlot = this.slots.map((slot) => slot.carId).indexOf(null);
    this.slots[emptySlot].carId = carId;
    return true;
  }

  remove(carId) {
    let carIndex = this.slots.indexOf(
      this.slots.find((slot) => slot.carId === carId)
    );
    if (carIndex != -1) {
      this.slots[carIndex].carId = null;
      return true;
    } else {
      return false;
    }
  }
}

let parking = new ParkingLot(5);

console.log(parking.getSlots());
parking.park(10);
console.log(parking.getSlots());
parking.park(20);
parking.park(30);
parking.park(40);
parking.park(50);
console.log(parking.park(60));
console.log(parking.getSlots());
parking.remove(10);
console.log(parking.getSlots());
