function showCoords(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  console.log(x ,y)
}

setInterval(() => {


  // ball 1
  const $ball1 = $(ball1);
  let offset = $ball1.offset();
  let ballLeft = offset.left;
  let ballTop = offset.top;


  //ball 2
  const $ball2 = $(ball2);
  let offset2 = $ball2.offset();
  let ballLeft2 = offset2.left;
  let ballTop2 = offset2.top;

  //ball 3
  const $ball3 = $(ball3);
  let offset3 = $ball3.offset();
  let ballLeft3 = offset3.left;
  let ballTop3 = offset3.top;

  //ball 4
  const $ball4 = $(ball4);
  let offset4 = $ball4.offset();
  let ballLeft4 = offset4.left;
  let ballTop4 = offset4.top;

  //ball 5
  const $ball5 = $(ball5);
  let offset5 = $ball5.offset();
  let ballLeft5 = offset5.left;
  let ballTop5 = offset5.top;

  // hoop

  const $hoop = $(hoop);
  let b = $hoop.offset();
  let hoopLeft = b.left;
  let hoopTop =b.top;


  if (ballLeft - hoopLeft <= 35 && Math.abs(ballTop - hoopTop) <= 12) {
    console.log("hit1")
    document.getElementById('score').innerHTML = "Score: " + count;
  }
  if (ballLeft2 - hoopLeft <= 35 && Math.abs(ballTop2 - hoopTop) <= 12) {
    console.log("hit2")
    document.getElementById('score').innerHTML = "Score: " + count;
  }
  if (ballLeft3 - hoopLeft <= 35 && Math.abs(ballTop3 - hoopTop) <= 12) {
    console.log("hit3")
    document.getElementById('score').innerHTML = "Score: " + count;
  }
   if (ballLeft4 - hoopLeft <= 35 && Math.abs(ballTop4 - hoopTop) <= 12) {
    console.log("hit4")
    document.getElementById('score').innerHTML = "Score: " + count;
  }
   if (ballLeft5 - hoopLeft <= 35 && Math.abs(ballTop5 - hoopTop) <= 12) {
    console.log("hit5")
    document.getElementById('score').innerHTML = "Score: " + count;
  }

}, 10);
