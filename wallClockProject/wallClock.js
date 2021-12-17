window.onload = function () {
	var container = document.getElementById("container");
	var secondInnerRoundDiv = document.getElementById("second-inner-round");
	var angle = 0;
	var hour = 12;
	for ( var i=0; i<30; i++ ) {
		var div = document.createElement('div');
		div.classList.add("diagonal");
		container.append(div);
		
		// 
		var diagonal = document.getElementsByClassName("diagonal")[i];
		diagonal.style.position = 'absolute';
		// angle 12 = bold
		angle%30 == 0 ? diagonal.style.width = '3px' : diagonal.style.width = '0.5px'
		angle%30 == 0 ? diagonal.style.zIndex = '6' : diagonal.style.zIndex = '4'
		diagonal.style.height = '100%';
		diagonal.style.backgroundColor = 'black';
		diagonal.style.transform = 'rotate('+ angle +'deg)';
		
		// 시간 세팅
		var digitDiv = document.createElement('div');
		digitDiv.classList.add("digit");
		secondInnerRoundDiv.append(digitDiv);
		if ( angle%30 == 0 ) {
			var digit = document.getElementsByClassName("digit")[i];
			digit.style.position = 'absolute';
			digit.style.width = '40px'
			digit.style.height = '100%';
			digit.style.transform = 'rotate('+ angle +'deg)';
			digit.style.zIndex = '7';
			digit.style.testAlign = 'center';
			digit.style.display = 'flex';
			digit.style.flexWrap = 'wrap';
			digit.style.justifyContent = 'space-between';
			digit.style.flexDirection = 'column';
			hour > 12 ? hour = hour-12 : hour
			if ( hour==12) {
				digit.innerHTML = '<div style="margin: 0 auto;"><h1 style="transform:rotate(-'+angle+'deg); margin: 0;">'+12+
				'</h1></div> <div style="margin: 0 auto;"><h1 style="transform:rotate(-'+angle+'deg); margin: 0;">'+6+'</h1></div>';
			} 
			else{
				digit.innerHTML = '<div style="margin: 0 auto;"><h1 style="transform:rotate(-'+angle+'deg); margin: 0;">'+hour+
				'</h1></div> <div style="margin: 0 auto;"><h1 style="transform:rotate(-'+angle+'deg); margin: 0;">'+(hour+6)+'</h1></div>';
			}
			hour++;
		}
		angle += 6;
	}
	
	
}

