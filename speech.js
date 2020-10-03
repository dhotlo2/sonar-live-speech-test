window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const v = document.getElementById("voip");
  const rec = document.getElementById("recording");
  const trans = document.getElementById("transcription");
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
    };

    const start = () => {
      result.classList.add("speaking");
      result.style.borderTop = '1px solid grey';
      result.style.margin = '0 15px';
      trans.style.display = 'block';
      recognition.start();
      button.style.border = "2px solid #f22f46";
      button.style.backgroundImage = 'url(phonered.svg)'
      v.style.display = 'none';
      rec.style.display = 'block';
      
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

        console.log(sec);
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
      }
    };
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.addEventListener("result", onResult);
    button.addEventListener("click", event => {
      listening ? stop() : start();
      listening = !listening;
    });
  } else {
    button.remove();
    const message = document.getElementById("message");
    message.removeAttribute("hidden");
    message.setAttribute("aria-hidden", "false");
  }

});

