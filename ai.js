window.setInterval(function(){
  console.log("AI Speech function called");
	if (
		document.getElementById('result').innerHTML.indexOf('use cases') != -1){
  		document.getElementById('usecases').style.display = 'block';	
	}
	if (
		document.getElementById('result').innerHTML.indexOf('open use-cases page') != -1){
  		openU();	
	}
	if (
		document.getElementById('result').innerHTML.indexOf('open use cases page') != -1){
  		openU();	
	}

	if (
		document.getElementById('result').innerHTML.indexOf('Salesforce integration') != -1){
  		document.getElementById('salesforce').style.display = 'block';	
	}
	if (
		document.getElementById('result').innerHTML.indexOf('open Salesforce integration page') != -1){
  		openS();
	}

	if (
		document.getElementById('result').innerHTML.indexOf('compliance') != -1){
  		document.getElementById('compliance').style.display = 'block';	
	}
	if (
		document.getElementById('result').innerHTML.indexOf('open compliance page') != -1){
  		openC();
	}

	if (
		document.getElementById('result').innerHTML.indexOf('open account settings') != -1){
  		openAccount();
	}
}, 500);

function closeUsecases() {
	document.getElementById("usecases").style.position = 'absolute';
	document.getElementById("usecases").style.right = '-500px';
}

function closeSalesforce() {
	document.getElementById("salesforce").style.position = 'absolute';
	document.getElementById("salesforce").style.right = '-500px';
}

function closeCompliance() {
	document.getElementById("compliance").style.position = 'absolute';
	document.getElementById("compliance").style.right = '-500px';
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


var openU = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://www.sendsonar.com/use-cases.html', '_blank');
			 win.focus();
        }
    };
})();

var openS = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://www.sendsonar.com/salesforce.html', '_blank');
			 win.focus();
        }
    };
})();

var openC = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://www.sendsonar.com/compliance.html', '_blank');
			 win.focus();
        }
    };
})();

var openAccount = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://staging-dashboard.sendsonar.com/?modal=AccountSettings', '_blank');
			 win.focus();
        }
    };
})();
