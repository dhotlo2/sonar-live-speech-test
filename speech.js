const net = new brain.recurrent.LSTM();

net.train([
  { input: ["I do not like you"], output: ["Sales rescue"] },
  { input: ["Maybe but not right now"], output: ["Sales rescue"] },
  { input: ["I do not think so"], output: ["Sales rescue"] },
  { input: ["Maybe but not right now"], output: ["Sales rescue"] },
  { input: ["Maybe not sure"], output: ["Sales rescue"] },
  { input: ["not right now"], output: ["Sales rescue"] },
  { input: ["some other time"], output: ["Sales rescue"] }, 
  { input: ["another time"], output: ["Sales rescue"] },
  { input: ["I will call you back"], output: ["Customer callback"] },
  { input: ["call you back"], output: ["Customer callback"] },
  { input: ["call back"], output: ["Customer callback"] },
  { input: ["call"], output: ["Customer callback"] },
]);

window.addEventListener("DOMContentLoaded", () => {
  const wave = document.getElementById("wave");
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const v = document.getElementById("voip");
  const rec = document.getElementById("recording");
  const trans = document.getElementById("transcription");
  const callbtn = document.getElementById("customerCallButton");
  const y = document.getElementById("mtg");
  var meetCounter = 0;
  let listening = false;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (typeof SpeechRecognition !== "undefined") {
    const recognition = new SpeechRecognition();

    const stop = () => {
      recognition.stop();
      button.style.border = "2px solid #20c186";
      button.style.backgroundImage = 'url(phonegreen.svg)'
      v.style.display = 'block';
      rec.style.display = 'none';
      wave.style.display = 'none';
      callbtn.style.filter = 'none';
      neural();
    };

    const start = () => {
      recognition.start();
      result.classList.add("speaking");
      result.style.borderTop = '1px solid grey';
      result.style.margin = '0 15px';
      trans.style.display = 'block';
      button.style.border = "2px solid #f22f46";
      button.style.backgroundImage = 'url(phonered.svg)'
      v.style.display = 'none';
      rec.style.display = 'block';
      wave.style.display = 'flex';
      callbtn.style.filter = 'grayscale(1)';
      document.getElementById('introscript').style.display = 'block'; 
      
      // Counter for call time
      var sec = 0;
      var min = 0;
      var counterThing =  setInterval(function(){
        sec++
        if (sec > 59) {
          sec = 0;
          min++;
        }
        if (sec < 10) {
          rec.innerHTML = '0:0' + min + ':0' + sec;
        }
        else {
          rec.innerHTML = '0:0' + min + ':' + sec;
        }
      }, 1000);
    };

    const onResult = event => {
      result.innerHTML = "";
      for (const res of event.results) {
        const text = document.createTextNode(res[0].transcript);
        const p = document.createElement("p");
        if (res.isFinal) {
          p.classList.add("final");
        }
        p.appendChild(text);
        result.appendChild(p);
        result.scrollTop = result.scrollHeight;
        speechSystem();
      }
    };
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.addEventListener("result", onResult);
    button.addEventListener("click", event => {
      listening ? stop() : start();
      listening = !listening;
    });
  }

});

function neural() {
  console.log("inside neural function")
  var x = document.getElementsByClassName("final");
  for (var i = 0; i < x.length; i++) {
    var all = x[i].innerText;
    console.log("this is all" + all);
    const output = net.run([all]); 
    console.log (output);
    var tag = document.getElementById('msg-tag');
    tag.style.display = 'block';
    tag.innerHTML = output.toString();
  }
}

function speechSystem(){
  console.log("AI Speech function called");
  if (
    document.getElementById('result').innerHTML.indexOf('new SUV') != -1){
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

  if (
    document.getElementById('result').innerHTML.indexOf('how do I send a campaign') != -1){
      openCampaign();
  }

  if (
    document.getElementById('result').innerHTML.indexOf('check my calendar') != -1){
      openCalendar();
  }

  if (
    document.getElementById('result').innerHTML.indexOf('send an email to Rebecca') != -1){
      openEmail();
  }

  if (
    document.getElementById('result').innerHTML.indexOf('show me the weather') != -1){
      openWeather();
  }
  // AUTO DEMO STUFF
  if (
    document.getElementById('result').innerHTML.indexOf('Sarah Jane') != -1){
      meetingThursday();
  }

  if (
    document.getElementById('result').innerHTML.indexOf('our inventory') != -1){
      document.getElementById('1500').style.display = 'block'; 
  }

  if (
    document.getElementById('result').innerHTML.indexOf('midsize') != -1){
      document.getElementById('division').style.display = 'block'; 
      document.getElementById('carinterest').innerHTML = 'SUV - new - mid size';
      document.getElementById('c-interest').style.borderLeft = '3px solid #4CAF50';
  }
  // if (
  //   document.getElementById('result').innerHTML.indexOf('Division') != -1){
  //     document.getElementById('division').style.display = 'block'; 
  // }
  // if (
  //   document.getElementById('result').innerHTML.indexOf('intro script') != -1){
  //     document.getElementById('introscript').style.display = 'block'; 
  // }

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
            var iframe = document.getElementById('sonarframe');
            iframe.src = 'https://staging-dashboard.sendsonar.com/?modal=AccountSettings';
        }
    };
})();

var openCampaign = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://docs.sendsonar.com/docs/campaigns', '_blank');
       win.focus();
        }
    };
})();

var openCalendar = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://calendar.google.com/calendar/u/3/r?tab=cc', '_blank');
       win.focus();
        }
    };
})();

var openEmail = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://mail.google.com/mail/u/3/?tab=wm&ogbl#starred?compose=CllgCKCHTlwZWgPCMkDWXgkLDcFlPMJfNMqTpxWrmnGLPHQthzsSsgTsPDvbcFPFgNXPDQRCkGq', '_blank');
       win.focus();
        }
    };
})();

var openWeather = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var win = window.open('https://weather.com/weather/today/l/41.92,-87.68?par=google&temp=f', '_blank');
       win.focus();
        }
    };
})();

var meetingThursday = (function() {
    var executed = false;
    return function() {
        if (!executed) {

            executed = true;
            document.getElementById("mtg").style.display = 'block';

            n =  new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate() + 1;
            document.getElementById("date").innerHTML = m + "/" + d + "/" + y;    

            var x =  setTimeout(function(){
              document.getElementById("mtg").style.display = 'none';
            }, 5000);
        }
    };
})();

var performanceScore = 0;

function startIntro() {
  console.log("intro started!");
  var scoreElement = document.getElementById('pscore');
  var execOne = false;
  var execTwo = false;
  var execThree = false;
  var execFour = false;
  var curse = false;
  var counterThing =  setInterval(function(){
    if (
        document.getElementById('result').innerHTML.indexOf('buying') != -1){
          document.getElementById('introContent').style.color = 'black'; 
          if (!execOne) {
            execOne = true;
            performanceScore += 25;
            scoreElement.innerHTML = 'Performance score: ' + performanceScore + '%';
            console.log('performance score :' + performanceScore);
          }
      }
    if (
        document.getElementById('result').innerHTML.indexOf('new SUVs') != -1){
          document.getElementById('pointOne').style.color = 'black';
          document.getElementById('checkOne').style.display = 'block'; 
          if (!execTwo) {
            execTwo = true;
            performanceScore += 25;
            scoreElement.innerHTML = 'Performance score: ' + performanceScore + '%';
            console.log('performance score :' + performanceScore);
          }
      }
    if (
        document.getElementById('result').innerHTML.indexOf('sale') != -1){
          document.getElementById('pointTwo').style.color = 'black';
          document.getElementById('checkTwo').style.display = 'block'; 
          if (!execThree) {
            execThree = true;
            performanceScore += 25;
            scoreElement.innerHTML = 'Performance score: ' + performanceScore + '%';
            console.log('performance score :' + performanceScore);
          }
      }
    if (
        document.getElementById('result').innerHTML.indexOf('new SUV') != -1){
          document.getElementById('pointThree').style.color = 'black';
          document.getElementById('checkThree').style.display = 'block'; 
          if (!execFour) {
            execFour = true;
            performanceScore += 25;
            scoreElement.innerHTML = 'Performance score: ' + performanceScore + '%';
            document.getElementById('carinterest').innerHTML = 'SUV - new';
            document.getElementById('c-interest').style.borderLeft = '3px solid #4CAF50';
            console.log('performance score :' + performanceScore);
          }
      }
    if (
      document.getElementById('result').innerHTML.indexOf('***') != -1){
        if (!curse) {
          curse = true;
          performanceScore -= 10;
          scoreElement.innerHTML = 'Performance score: ' + performanceScore + '%';
          console.log('performance score :' + performanceScore);
        }
    }

    }, 500);
}
// var meetingThursday = (function() {
//     var done = false;
//     return function(){
//       if (!done) {
//         done = true;
//         document.getElementById("mtg").style.display = 'block';
//         var x =  setTimeout(function(){
//           document.getElementById("mtg").style.display = 'none';
//         }, 5000);
//       }
//     };
// });
