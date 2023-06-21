var goodDrivingRecord = true;
var driverAge = 24;

function rentalCar(drivingRecord, age) {
  if (drivingRecord === true && age > 25) {
    console.log("Congrats, you qualify for a discount!");
  } else if (drivingRecord === true || age > 25) {
    console.log("That'll be full price");
  } else {
    console.log("Sorry you'll need someone else to sign for the rental...");
  }
}

rentalCar(false, 27);
rentalCar(true, 27);
rentalCar(false, 18);
rentalCar(true, 30);
