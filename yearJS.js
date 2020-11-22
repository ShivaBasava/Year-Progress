function getProgress() { 
var element = document.getElementById("myprogressBar"); 
var width = 1; 
var identity = setInterval(scene, 10); 
function scene() { 
  	var d = new Date();
  	var n = d.getFullYear();

        var firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
  
        var firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
        const now = new Date().getTime();
        var n = Math.round((now - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear) * 100);

	if (width >= n) { 
	clearInterval(identity); 
	} else { 
	width++; 
	element.style.width = width + '%'; 
	element.innerHTML = width * 1 + '%'; 
		} 
	} 
} 

