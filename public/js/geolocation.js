$(document).ready(function(){

  var x = document.getElementById("latitude");
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }

  var lat = 0;
  var long = 0;
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude);
    lat = position.coords.latitude;
    long = position.coords.longitude;
  }

  document.getElementById("geolocateBtn").addEventListener("click",Func);

  function Func(){
    localStorage.setItem("high", high);
    localStorage.setItem("low", low);
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", long);
    localStorage.setItem("radius", dist * 161);

    
  }

  var distClassName = document.getElementsByClassName("sButton");
  var dist = 0;

  for (var i = 0; i < distClassName.length; i++) {
    distClassName[i].addEventListener("click",distanceF, false);
  }

  function distanceF(){
    if (dist != this.id) {
      if (dist != 0) {
          shade("distance", dist);
      }
      unshade("distance", this.id);
      dist = this.id;
    }
    else {
      shade("distance", dist);
      dist = 0;
    }
  }



  var priceClassName = document.getElementsByClassName("mButton");
  var lst = [0,0,0,0];
  var clicked = 0;
  var low = 0;
  var high = 0;

  for (var j = 0; j < priceClassName.length; j++) {
    priceClassName[j].addEventListener("click",priceF, false);
  }

  function priceF() {
    if (lst.reduce(function(a, b) { return a + b; }, 0) > 1 || lst.reduce(function(a, b) { return a + b; }, 0) == 0) {
      if (clicked != 0) {
        for (var i = 0; i < 4; i++) {
          if (lst[i] == 1) {
            unshade("price", i+1);
          }
        }
      }
      lst = [0,0,0,0];
      lst[this.id-1] = 1;
      clicked = this.id;
      shade("price", this.id);
    }
    else {
      if (clicked > this.id) {
        for (var i = (this.id-1); i < clicked; i++) {
          lst[i] = 1;
          shade("price", i+1);
        }
      }
      if (clicked < this.id) {
        for (var i = (clicked-1); i < this.id; i++) {
          lst[i] = 1;
          shade("price", i+1);
        }
      }
      if (clicked == this.id) {
        unshade("price", this.id);
        clicked = 0;
        lst = [0,0,0,0];
      }
    }
    var temp = 0
    for (var i = 0; i < 4; i++) {
      if (lst[i] == 1 && temp == 0) {
        low = i+1;
        temp = 1;
      }
      if (lst[i] == 1) {
        high = i+1;
      }
    }
  }


  function shade(type, num) {
    if (type == "price") {
      document.getElementById("" + num).classList.remove("mButton");
      document.getElementById("" + num).classList.add("mmButton");
    }
    else {        //distance
      document.getElementById("" + num).classList.remove("ssButton");
      document.getElementById("" + num).classList.add("sButton");
    }
  }

  function unshade(type, num) {
    if (type == "price") {
      document.getElementById("" + num).classList.remove("mmButton");
      document.getElementById("" + num).classList.add("mButton");
    }
    else {
      document.getElementById("" + num).classList.remove("sButton");
      document.getElementById("" + num).classList.add("ssButton");
    }
  }


});
//
//
//   function getLocation() {
//       if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//           x.innerHTML = "Geolocation is not supported by this browser.";
//       }
//   }
//
//
