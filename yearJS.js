function getProgress() { 
var element = document.getElementById("myprogress_bar"); 
var width = 1; 
var identity = setInterval(myrender, 10); 
function myrender() { 
        var firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
  
        var firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
        const curDay = new Date().getTime();
        var tot_progress = Math.round((curDay - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear) * 100);

	if (width >= tot_progress) { 
		clearInterval(identity); 
	} else { 
		width++; 
		element.style.width = width + '%'; 
		element.innerHTML = width * 1 + '%'; 
		} 
	} 
} 

