use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Jordan Davidson",
    email: "jordan.davidson@codeclan.com",
    checkedIn: true
  },
  {
    name: "Jack Torrence",
    email: "heres.jonny@shining.com",
    checkedIn: true
  },
  {
    name: "Joe Walsh",
    email: "the.eagles@hotel.com",
    checkedIn: false
  }
])
