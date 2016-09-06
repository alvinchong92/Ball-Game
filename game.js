class Game {
  constructor() {
  }

  score() {
    let count = 0;
    const p = document.createElement('p');
    p.setAttribute('id','score');
    container.appendChild(p);
    p.style.display = 'block';
    p.innerHTML = 'Hit? '
  }


  clickToMove() {
  for (let i = 1; i <= 5; i++) {
    $(`#ball${i}`).click(function () {
      $(this).animate({ left: '5px'}, '-10000', 'linear', function () {
          $(this).hide(200);
        });
      });
    }
  }

  render () {
    a.createBall();
    c.score();
    b.createBackboard();
    c.clickToMove();
  }
}

const a = new Ball();
const b = new Hoop();
const c = new Game();
c.render();
