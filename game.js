console.log("game")
class Game {
  constructor(game) {
    this.ball = ball
    this.hoop = hoop

  }
}




  function myMove() {
  let elem = document.getElementById("ball");
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
