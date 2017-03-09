setInterval(() => {
  let $ball = $(ball0);
  let offset = $ball.offset();
  let ballLeft = offset.left;
  let ballTop = offset.top;

  let $ball1 = $(ball1);
  let offset1 = $ball1.offset();
  let ballLeft1 = offset1.left;
  let ballTop1 = offset1.top;


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


  // hoop
  let $hoop = $(hoop);
  let b = $hoop.offset();
  let hoopLeft = b.left;
  let hoopTop =b.top;


  var counter = 0;
    if (ballLeft- hoopLeft <= 35 && Math.abs(ballTop - hoopTop) <= 12) {
      counter += 1
      document.getElementById('score').innerHTML = 'Ball 1 Hit'
      console.log('hit')
  }
    if (ballLeft1 - hoopLeft <= 35 && Math.abs(ballTop1 - hoopTop) <= 12) {
      counter+=1
      document.getElementById('score').innerHTML = 'Ball 2 Hit'
       console.log('hit2')
  }
    if (ballLeft2 - hoopLeft <= 35 && Math.abs(ballTop2 - hoopTop) <= 12) {
      counter+=1
      document.getElementById('score').innerHTML = 'Ball 3 Hit'
       console.log('hit3')
  }
    if (ballLeft3 - hoopLeft <= 35 && Math.abs(ballTop3 - hoopTop) <= 12) {
      counter+=1
      document.getElementById('score').innerHTML = 'Ball 4 Hit'
       console.log('hit4')
  }
    if (ballLeft4 - hoopLeft <= 35 && Math.abs(ballTop4 - hoopTop) <= 12) {
      counter+=1
      document.getElementById('score').innerHTML = 'Ball 5 Hit'
       console.log('hit5')

  }
}, 100);


