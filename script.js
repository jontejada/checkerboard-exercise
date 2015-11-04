document.body.style.margin = '0px';
document.body.style.backgroundColor = 'blue';
var boxSize = window.innerWidth * 0.111;

// var box = document.createElement('div');
// box.style.backgroundColor = 'black';
// box.style.width = boxSize+'px';
// box.style.height = boxSize+'px';
// box.style.cssFloat = 'left';
// box.style.margin = '0px';
// document.body.appendChild(box);

// var box2 = document.createElement('div');
// box2.style.backgroundColor = 'red';
// box2.style.width = boxSize+'px';
// box2.style.height = boxSize+'px';
// box2.style.cssFloat = 'left';
// box2.style.margin = '0px';
// document.body.appendChild(box2);

function MakeBox (color) {
	var box = document.createElement('div');
	box.style.backgroundColor = color;
	box.style.width = boxSize+'px';
	box.style.height = boxSize+'px';
	box.style.cssFloat = 'left';
	box.style.margin = '0px';
	//box.style.paddingBottom = boxSize+'px';
	document.body.appendChild(box);
}

// for (var i = 0 ; i < 81 ; i++ ) {
// 	MakeBox ('black');
// 	MakeBox ('red');
// }

//randomcolors
// for (var i = 0 ; i < 81 ; i++ ) {
// 	var rColorR = Math.floor(Math.random()*256);
// 	var rColorG = Math.floor(Math.random()*256);
// 	var rColorB = Math.floor(Math.random()*256);
// 	MakeBox ('rgb('+rColorR+","+rColorG+","+rColorB+")");
// }

//gradient on random
// var alpha = 0.1;
// for (var i = 0 ; i < 81 ; i++ ) {
// 	alpha = alpha + 0.015;
// 	var rColorR = Math.floor(Math.random()*256);
// 	var rColorG = Math.floor(Math.random()*256);
// 	var rColorB = Math.floor(Math.random()*256);
// 	MakeBox ('rgba('+rColorR+","+rColorG+","+rColorB+","+alpha+")");
// 	console.log(alpha);
// }

//(rebuilt) checkerboard with gradient
for (var i = 0 ; i < 81 ; i++) {
	MakeBox('rgb(0,0,'+6*i+')');
	MakeBox('rgb(255,0,'+6*i+')');
}



