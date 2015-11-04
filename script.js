document.body.style.margin = '0px';
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

for (var i = 0 ; i < 100 ; i++ ) {
	MakeBox ('black');
	MakeBox ('red');
}
