setInterval(() => {


  let $ball1 = $(ball1);
  let offset = $ball1.offset();
  let ballLeft1 = offset.left;
  let ballTop1 = offset.top;


  //ball 2
  let $ball2 = $(ball2);
  let offset2 = $ball2.offset();
  let ballLeft2 = offset2.left;
  let ballTop2 = offset2.top;

  //ball 3
  const $ball3 = $(ball3);
  let offset3 = $ball3.offset();
  let ballLeft3 = offset3.left;
  let ballTop3 = offset3.top;

  //ball 4
  let $ball4 = $(ball4);
  let offset4 = $ball4.offset();
  let ballLeft4 = offset4.left;
  let ballTop4 = offset4.top;

  //ball 5
  let $ball5 = $(ball5);
  let offset5 = $ball5.offset();
  let ballLeft5 = offset5.left;
  let ballTop5 = offset5.top;

  // hoop
  let $hoop = $(hoop);
  let b = $hoop.offset();
  let hoopLeft = b.left;
  let hoopTop =b.top;


  let count = 0;
    if (ballLeft1 - hoopLeft <= 35 && Math.abs(ballTop1 - hoopTop) <= 12) {
      document.getElementById('score').innerHTML = "Ball 1!"
  }
    if (ballLeft2 - hoopLeft <= 35 && Math.abs(ballTop2 - hoopTop) <= 12) {
      document.getElementById('score').innerHTML = "Ball 2!"
  }
    if (ballLeft3 - hoopLeft <= 35 && Math.abs(ballTop3 - hoopTop) <= 12) {
      document.getElementById('score').innerHTML = "Ball 3!";
  }
    if (ballLeft4 - hoopLeft <= 35 && Math.abs(ballTop4 - hoopTop) <= 12) {
      document.getElementById('score').innerHTML = "Ball 4!";
  }
    if (ballLeft5 - hoopLeft <= 35 && Math.abs(ballTop5 - hoopTop) <= 12) {
      document.getElementById('score').innerHTML = "Ball 5!";
  }
}, 100);
