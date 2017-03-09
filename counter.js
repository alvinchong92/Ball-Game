 //countdown timer
 function countdown() {
  var now = 30;
  var x = setInterval(function() {
    document.getElementById('timer').innerHTML = now--;

    if(now < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'done'
      alert('Game over')
      window.location.reload();
    }
  },1000)
}

