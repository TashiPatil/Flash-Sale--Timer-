// setTimeout
var h = document.querySelector('.hour');
var m = document.querySelector('.minutes');
var s = document.querySelector('.seconds');
// query selector selects something from html.



var hours = 15;
var minutes = 1;
var seconds = 10;
setInterval(function () {
  // console.log(hours," : ", minutes, " : ",seconds);

  seconds = seconds - 1;
  // when seconds become 0 then minutes = minutes - 1.
  if(seconds < 0) {
    minutes=minutes-1;
    seconds=59;    
  }
  if(minutes < 0) {
    hours = hours-1;
    minutes = 59;
    
  }

  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;

},1000);
