class Ball {
  constructor() {
    this.balls = null;
  };
  createBall() {
    for(let i=1; i<6; i++) {
      this.balls = document.createElement('div');
      this.balls.id=`ball${i}`
      this.balls.className='ball';
      document.getElementById('container').appendChild(this.balls);
    }
  }

  styleBall() {
  let x = document.getElementsByClassName('ball')
  for(let i=0; i<5; i++) {
  x[i].style.left=`${Math.floor(Math.random() * 900)}px`;
  x[i].style.top=`${Math.floor(Math.random() * 300)}px`;
    }
  }

  render() {
    a.createBall();
    a.styleBall();
  }
}

const a = new Ball();
a.render();

