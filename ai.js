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

// window.setInterval(function(){
//   console.log("AI Speech function called");
//   if (
//     document.getElementById('result').innerHTML.indexOf('use cases') != -1){
//       document.getElementById('usecases').style.display = 'block';  
//   }
//   if (
//     document.getElementById('result').innerHTML.indexOf('open use-cases page') != -1){
//       openU();  
//   }
//   if (
//     document.getElementById('result').innerHTML.indexOf('open use cases page') != -1){
//       openU();  
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('Salesforce integration') != -1){
//       document.getElementById('salesforce').style.display = 'block';  
//   }
//   if (
//     document.getElementById('result').innerHTML.indexOf('open Salesforce integration page') != -1){
//       openS();
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('compliance') != -1){
//       document.getElementById('compliance').style.display = 'block';  
//   }
//   if (
//     document.getElementById('result').innerHTML.indexOf('open compliance page') != -1){
//       openC();
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('open account settings') != -1){
//       openAccount();
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('how do I send a campaign') != -1){
//       openCampaign();
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('check my calendar') != -1){
//       openCalendar();
//   }

//   if (
//     document.getElementById('result').innerHTML.indexOf('send an email to Rebecca') != -1){
//       openEmail();
//   }
//   if (
//     document.getElementById('result').innerHTML.indexOf('anything') != -1){
//       console.log("anything");
//   }
// }, 500);


// var openU = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://www.sendsonar.com/use-cases.html', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openS = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://www.sendsonar.com/salesforce.html', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openC = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://www.sendsonar.com/compliance.html', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openAccount = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://staging-dashboard.sendsonar.com/?modal=AccountSettings', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openCampaign = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://docs.sendsonar.com/docs/campaigns', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openCalendar = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://calendar.google.com/calendar/u/3/r?tab=cc', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openEmail = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://mail.google.com/mail/u/3/?tab=wm&ogbl#inbox?compose=GTvVlcSBnpwckdjtvWJNvGsdfXhTGssdjpnkBxWPRdLQWScXJJTftlmBMtRqZHGPvzCFCKlvKkVKh', '_blank');
//        win.focus();
//         }
//     };
// })();

// var openWeather = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             var win = window.open('https://weather.com/weather/today/l/41.92,-87.68?par=google&temp=f', '_blank');
//        win.focus();
//         }
//     };
// })();
