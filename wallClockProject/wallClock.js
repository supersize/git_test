window.onload = function () {
	/*
	 * 
	var diagonal = document.getElementByClassName("diagonal");
	diagonal.style.width = '0.5px';
	diagonal.style.height = '100%';
	diagonal.style.background-color = 'black';
	diagonal.style.transform = 'rotate('+  +'deg)';
	 */
	
	var container = document.getElementById("container");
	var angle = 0;
	for ( var i=0; i<30; i++ ) {
		var div = document.createElement('div');
		div.classList.add("diagonal");
		container.append(div);
		
		var diagonal = document.getElementsByClassName("diagonal")[i];
		diagonal.style.position = 'absolute';
		// angle 12 = bold
		angle%30 == 0 ? diagonal.style.width = '2px' : diagonal.style.width = '0.5px'
		diagonal.style.height = '100%';
		diagonal.style.backgroundColor = 'black';
		diagonal.style.transform = 'rotate('+ angle +'deg)';
		
		angle += 6;
	}
}

