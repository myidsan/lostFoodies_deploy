window.onload = function() {

  // get array from the get method
  array = [];

  // var container = document.getElementById("foodContainer");
  // for (var i = 0; i < array.length; i++) {
  //   var bDiv = document.createElement('div');
  //   var aDiv = document.createElement('div');
  //
  //   iDiv.id = 'block' + i;
  //   iDiv.setAttribute("style", "background-image: url(" + array[i][1] + ")");
  //   document.getElementbyID('foodContainer').appendChild(iDiv);
  // }
  // container.innerHTML = htmlElements;

  var container = document.getElementById("foodContainer");
  for (var i = 0; i < array.length; i++) {
    var bDiv = document.createElement('div');
    var aDiv = document.createElement('div');
    bDiv.id = "buddy" + i;
    aDiv.id = arry[i][1]
    aDiv.setAttribute("style", "background-image: url(" + array[i][0] + ")");
    bDiv.appendChild(aDiv);
    document.getElementbyID('foodContainer').appendChild(bDiv.appendChild(aDiv));
  }
};

// var htmlElements = "";
// htmlElements += '<div class="buddy"><div class="avatar"></div></div>';
