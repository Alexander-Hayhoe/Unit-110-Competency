function retrieveCatalog() {
  $.ajax({
    url: '/catalog/getCatalog',
    type: 'GET',
    success: res => {
      console.log("Server responded: ", res);

      for (let i = 0; i < res.length; i++) {
        displayCar(res[i]);
      }
    },

    error: function (detail) {
      console.error("From server", detail)
    }
  })
}

function displayCar(car) {

  var container = $("#catalog");

  var sntx =
    `<div class="item">
  <img src="wwwroot/img/jeep.jpg">
    <h2>${car.year} ${car.make} ${car.model}</h2>

  </div>`;

  container.append(sntx);

}

function init() {
  console.log("Catalog Page");
  retrieveCatalog();
}

window.onload = init;