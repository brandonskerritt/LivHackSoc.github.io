document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "We are University of Liverpool Hackathon Society", "Major League Hacking on March/April 2019"];

    function typeWriter(text, i, fnCallback) {

      if (i < (text.length)) {

       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 80);
      }
      else if (typeof fnCallback == 'function') {
        // timer before the next setence
        setTimeout(fnCallback, 3000);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 30000);
       }

      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });