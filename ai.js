window.setInterval(function(){
  console.log("AI Speech function called");
	 if (
		document.getElementById('result').innerHTML.indexOf('use cases') != -1){
	  		document.getElementById('usecases').style.display = 'block';	
	}
	if (
		document.getElementById('result').innerHTML.indexOf('Salesforce integration') != -1){
	  		document.getElementById('salesforce').style.display = 'block';	
	}
}, 500);

function closeUsecases() {
	console.log("test works");
	document.getElementById("usecases").style.position = 'absolute';
	document.getElementById("usecases").style.right = '-500px';
}

function closeSalesforce() {
	console.log("test works");
	document.getElementById("salesforce").style.position = 'absolute';
	document.getElementById("salesforce").style.right = '-500px';
}

function test() {
	var msg = document.getElementsByClassName("text");

	for (var i = 0; i < msg.length; i++) {
		msg[i].textContent.replace(/again/g, '<a href="www.google.com" target=_blank>hello</a>');
	}
}

function showLive() {
	document.getElementById("livecall").style.display = 'block';
}

