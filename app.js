function move(element) {
	var obj1 = document.getElementById("obj");
	var posLeft = parseInt(obj1.style.left);
	var posTop = parseInt(obj1.style.top);
	var speed = 25;

	if(!posLeft) {
		posLeft = 0;
	}

	if(!posTop) {
		posTop = 0;
	}


	switch(element.id) {
		case "oben":
				posTop = posTop - speed;
				if(posTop < 0) {
					return;
				}

			break;
		case "links":
				posLeft = posLeft - speed;
				if(posLeft < 0) {
					return;
				}
			break;
		case "unten":
				posTop = posTop + speed;
				if(posTop > 480 ) {
					return;
				}
			break;
		case "rechts":
				posLeft = posLeft + speed;
				if(posLeft > 480) {
					return;
				}
			break;
		default:
			break;				

	} 


	obj1.style.left = posLeft + 'px';
	obj1.style.top = posTop + 'px';

}
