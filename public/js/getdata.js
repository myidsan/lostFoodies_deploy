$(document).ready(function(){

 // console.log(localStorage.getItem("latitude"));
 // console.log(localStorage.getItem("longitude"));
 // console.log(localStorage.getItem("high"));
 // console.log(localStorage.getItem("low"));
 // console.log(localStorage.getItem("radius"));

 var option =
 {
     "lat": String(localStorage.getItem("latitude")),
     "long": String(localStorage.getItem("longitude")),
     "low_price": String(localStorage.getItem("low")),
     "high_price": String(localStorage.getItem("high")),
     "radius": String(localStorage.getItem("radius"))
  }
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
 url = "https://secure-reaches-74244.herokuapp.com/api/start";
 testUrl = "https://lostfoodie-fee5d.firebaseio.com/";
 newUrl = "http://159.203.119.15/api/start";
 // fetch(proxyUrl + url,
 fetch(newUrl,
 {
   method: "POST",
  //  credentials: "same-origin",
   mode: "no-cors",
   body: JSON.stringify(option),
   headers:
     {
       "Content-Type": "application/json",
       'Access-Control-Allow-Origin': 'http://159.203.119.15'
     }
   })
   .then(function(data) {
       console.log(typeof(data));
       console.log(JSON.stringify(data));
       var container = document.getElementById("foodContainer");
       for (var i = 0; i < array.length; i++) {
         var bDiv = document.createElement('div');
         var aDiv = document.createElement('div');
         bDiv.id = "buddy" + i;
         aDiv.id = data[i][1]
         aDiv.setAttribute("style", "background-image: url(" + data[i][0] + ")");
         bDiv.appendChild(aDiv);
         document.getElementbyID('foodContainer').appendChild(bDiv.appendChild(aDiv));
       }
    }).catch(function(res) {
      console.log("error");
  })
});
