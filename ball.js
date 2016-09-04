// What is the ball
class Ball {
  constructor(x,y) {
    this.x;
    this.y;
    this.left = `${Math.floor(Math.random()*1500)}px`
    this.top = `${Math.floor(Math.random()*300)}px`


  }


  // Create Ball
  createBall () {
  const container = document.getElementById('container');

  let ball1 = document.createElement('div');
  ball1.classList.add("ball");
  ball1.setAttribute('id','ball1');
  container.appendChild(ball1);
  document.getElementById('ball1').style.height = "25px"
  document.getElementById('ball1').style.left = `${Math.floor(Math.random()*1500)}px`
  document.getElementById('ball1').style.top = "128px"

  let ball2 = document.createElement('div');
  ball2.classList.add("ball");
  ball2.setAttribute('id','ball2');
  container.appendChild(ball2);
  document.getElementById('ball2').style.height = "25px";
  document.getElementById('ball2').style.left = `${Math.floor(Math.random()*1500)}px`
  document.getElementById('ball2').style.top = "128px"

  // `${Math.floor(Math.random()*300)}px`

  }



  clickToMove() {
    for (let i = 1; i <= 3; i++) {
    $(`#ball${i}`).click(function(){

      $(`#ball${i}`).animate({ left: "3px"}, Math.floor(Math.random()*10000),"linear",function()
      {
        setInterval();
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

  let counter = 0

  // ball 1
  let $ball1 = $(ball1);
  let offset = $ball1.offset();
  let ballLeft = offset.left;
  let ballTop = offset.top;


  //ball 2
  let $ball2 = $(ball2);
  let offset2 = $ball2.offset();
  let ballLeft2 = offset2.left;
  let ballTop2 = offset2.top;

  // hoop

  let $hoop = $('#hoop');
  let b = $hoop.offset();
  let hoopLeft = b.left;
  let hoopTop =b.top;


  // console.log(`ball 1x : ${ballLeft}`);
  // console.log(`ball 1y: ${ballTop}`)
  // console.log(`bucket x: ${hoopLeft}`);
  // console.log(`bucket y : ${hoopTop}`)


  if (ballLeft - hoopLeft <= 35 && Math.abs(ballTop - hoopTop) <= 12) {
    counter += 1
  }
  if (ballLeft2 - hoopLeft <= 35 && Math.abs(ballTop - hoopTop) <= 12) {
    counter += 1
    console.log('hit2');
    console.log(counter);
  }

}, 10);







const a = new Ball;
a.render();
const b = new Hoop;
b.createBackboard();




