const db = require("../database")
const Booking = require("./Booking")

class BookingRepository {
  constructor() {
    this.db = db
  }

  async findAll() {
    const storedBookings = await this.db.manyOrNone('SELECT id, room_id as "roomId", guest_name as "guestName", check_in_date as "checkInDate", check_out_date as "checkOutDate", user_id as "userId" FROM Bookings')
    return storedBookings.map(booking => new Booking(booking))
  }

  async create(booking) {
    await this.db.none("INSERT INTO Bookings (id, room_id, guest_name, check_in_date, check_out_date, user_id) 
      VALUES(${ id }, ${ roomId }, ${ guestName }, ${ checkInDate }, ${ checkOutDate }, ${ userId })", booking)
  }
}

module.exports = BookingRepository
