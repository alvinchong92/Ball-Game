  function changeBallColors() {
    document.getElementById('ball0').style.backgroundColor="#008597";
    document.getElementById('ball1').style.backgroundColor="#35ff99"
    document.getElementById('ball2').style.backgroundColor="#ffcc00";
    document.getElementById('ball3').style.backgroundColor="#2d3443";
    document.getElementById('ball4').style.backgroundColor="#2d3443";
  }

  function moveBalls() {
    $('button').click(function() {
      for(let i=0; i<5; i++) {
        $(`#ball${i}`).animate({ right: `-=${Math.floor(Math.random() * 300)}px`}, 'slow');
        $(`#ball${i}`).animate({ top: `${Math.floor(Math.random() * 100)}px`}, 'slow');
      }
    });
  }

  function gameBalls() {
    $('.ball').click(function() {
      $(this).animate({'right': '200'},'linear', function() {
        $(this).hide(500);
      })
    })
  }

  function render() {
    moveBalls();
    changeBallColors();
    gameBalls();
  }

setTimeout(function(){render()},3000)



