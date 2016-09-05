class Game {
  constructor() {
  }

  score() {
    let counter = 0;
    const p = document.createElement('p');
    p.setAttribute('id','score');
    container.appendChild(p);
    p.style.display = 'block';
    p.innerHTML = 'Score: ' + counter;
  }

  // timer() {
  //   let timer = document.createElement('p');
  //   timer.setAttribute('id','time');
  //   container.appendChild(timer);
  //   for (let i = 0; i <=30; i -=) {
  //   timer.innerHTML= `Time ${i}`
  //   }
  // }

  render () {
    c.score();
    // c.timer();

  }
}


const c = new Game;
c.render();
