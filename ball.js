// What is the ball
class Ball {
  constructor() {

  }
  // Create Ball
  createBall () {
    const $container = $("#container");
    let $ball = $('<div/>').addClass('basketball').attr("id","ball");
    $container.append($ball);
  }


  // ballMove() {
  //   $(ball).animate({ left: "1%" }, 1000);
  // }


  // Ball moves
  clickToMove() {
    $("#ball").click(function(){
      $(ball).animate({ left: "1%" }, 1000);
  })}


  render() {
    a.createBall();
    a.clickToMove();
  }
}



const a = new Ball;
a.render();
a.clickToMove();
