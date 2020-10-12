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

function showLive() {
	document.getElementById("livecall").style.display = 'block';
}

function closePopup1500() {
	document.getElementById("1500popup").style.display = 'none';
}
function closeDivision() {
	document.getElementById("divisionpopup").style.display = 'none';
}

function open1500() {
	document.getElementById("1500popup").style.display = 'block';
	document.getElementById("1500").style.position = 'absolute';
	document.getElementById("1500").style.right = '-500px';
}

function openDivision() {
	document.getElementById("divisionpopup").style.display = 'block';
	document.getElementById("division").style.position = 'absolute';
	document.getElementById("division").style.right = '-500px';
}

// function addCallBtn() {
// 	var array = document.getElementsByClassName("customer-name");
// 	var lastItem = array.slice(-1);
// 	var newElement = document.createElement("div");
// 	newElement.setAttribute('class', 'callbtn');
// 	newElement.setAttribute('id', 'customerCallButton');
// 	newElement.setAttribute('onClick', 'showLive()');
// 	lastItem.appendChild(newElement);
// }

// setInterval(function(){
// 	var iframe = document.getElementById('sonarframe');
// 	var innerDoc = iframe.contentDocument || iframe.contentWindow;
// 	var allItems = innerDoc.document.getElementsByClassName("customer-name");
// 	var lastItem = allItems[allItems.length - 1];
// 	console.log(iframe.innerhHTML);
// 	var newElement = document.createElement("div");
// 	newElement.setAttribute('class', 'callbtn');
// 	newElement.setAttribute('id', 'customerCallButton');
// 	newElement.setAttribute('onClick', 'showLive()');
// 	lastItem.appendChild(newElement);
// }, 1000);