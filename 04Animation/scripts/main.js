

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x(1 1 1) += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x(1 1 1));
 }
 setInterval(spin, 16); //equivalent to 60 fps
