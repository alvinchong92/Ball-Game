// What is the ball
class Ball {
  constructor(x,y) {
    this.x;
    this.y;
  }


  // Create Ball
  createBall () {
    const $container = $("#container");
    let $ball1 = $('<div/>').addClass('balls').attr("id","ball1");
    $container.append($ball1);
    let $ball2 = $('<div/>').addClass('balls').attr("id","ball2");
    $container.append($ball2);
    let $ball3 = $('<div/>').addClass('balls').attr("id","ball3");
    $container.append($ball3);
  }



  clickToMove() {
    for (let i = 1; i <= 3; i++) {
    $(`#ball${i}`).click(function(){

      $(`#ball${i}`).animate({ left: "3px"}, 4000,"linear",function()
      {
        $(this).remove();
      });
    })
    }
  }



  render() {
    a.createBall();
    a.clickToMove();
  }
}

class Hoop {
constructor (x,y) {

  }

  edge() {
    let edge = (30,20);
  }

  createBackboard() {
    const container = document.getElementById('container');
    let hoop = document.createElement('div');
    hoop.setAttribute('id','hoop')
    container.appendChild(hoop);
    let rim = document.createElement('div');
    rim.setAttribute('id','rim');
    hoop.appendChild(rim);
  }
}


function showCoords(evt){
  let x = evt.clientX;
  let y = evt.clientY;
  console.log(x,y)
}

setInterval(() => {

  // ball 1
  let $ball1 = $('#ball1');
  let offset = $ball1.offset();
  let ballLeft = offset.left;
  let ballTop = offset.top;


  //ball 2
  let $ball2 = $('#ball2');
  let offset2 = $ball2.offset();
  let ballLeft2 = offset.left;
  let ballTop2 = offset.top;

  //ball 3

  let $ball3 = $('#ball3');
  let offset3 = $ball1.offset();
  let ballLeft3 = offset.left;
  let ballTop3 = offset.top;

  // hoop

  let $hoop = $('#hoop');
  let b = $hoop.offset();
  let bLeft = b.left;
  let bTop =b.top;


  console.log(`ball 1x : ${ballLeft}`);
  console.log(`ball 1y: ${ballTop}`)
  console.log(`bucket x: ${bLeft}`);
  console.log(`bucket y : ${bTop}`)


  if ( ballLeft - bLeft <= 35 && Math.abs(ballTop - bTop) <= 12) {
    alert('collision!');
  } else if (ballLeft2 - bLeft <= 35 && Math.abs(ballTop2 - bTop) <= 12) {
    alert('collision2');
  } else if (ballLeft3 - bLeft <= 35 && Math.abs(ballTop3 - bTop) <= 12) {
    alert('collision3');
  }

}, 10);






//   setInterval(() => {
//   let $test = $('#ball2');
//   let os = $test.offset();
//   console.log(os.left);
// }, 1000)



const a = new Ball;
a.render();
const b = new Hoop;
b.createBackboard();




