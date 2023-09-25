const { v4: uuidv4 } = require("uuid");

// id, roomId, guestName, checkInDate, checkOutDate

class Booking {
  constructor({ id, userId, roomId, guestName, checkInDate, checkOutDate }) {
    this.id = id ?? uuidv4();
    this.userId = userId;
    this.roomId = roomId;
    this.guestName = guestName;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
  }
}

module.exports = Booking;
