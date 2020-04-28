function Car(make, model, year, color, price, mileage, condition, seats, mpg, image) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.price = price;
  this.mileage = mileage;
  this.condition = condition;
  this.seats = seats;
  this.mpg = mpg;
  this.image = image;
}


function registerCar() {
  var make = $("#txtMake").val();
  var model = $("#txtModel").val();
  var year = $("#txtYear").val();
  var color = $("#txtColor").val();
  var price = $("#txtPrice").val();
  var mileage = $("#txtMileage").val();
  var condition = $("#txtCondition").val();
  var seats = $("#txtSeats").val();
  var mpg = $("#txtMPG").val();
  var image = $("#txtImg").val();

  var priceNum = 0;
  if (price) {
    priceNum = parseFloat(price);
  }

  var yearNum = 0;
  if (year) {
    yearNum = parseInt(year);
  }

  var seatsNum = 0;
  if (seats) {
    seatsNum = parseInt(seats);
  }

  var mileageNum = 0;
  if (mileage) {
    mileageNum = parseInt(mileage);
  }

  var mpgNum = 0;
  if (mpg) {
    mpgNum = parseInt(mpg);
  }

  var car = new Car(make, model, yearNum, color, priceNum, mileage, condition, seatsNum, mpg, image)

  $.ajax({
    url: '/catalog/SaveCar',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(car),
    success: function (res) {
      console.log("Server responded: ", res);
    },

    error: function (detail) {
      console.log("Error on request", detail)
    }
  })
}


function init() {
  consnole.log("Test");

  $("#btnSave").click(registerCar);
}

window.onload = init;