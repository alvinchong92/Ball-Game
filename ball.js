class Balls {
  constructor() {
    this.balls = null;
  }

  createBalls() {
    for(let i=0; i<5; i++) {
      this.balls=document.createElement('div');
      this.balls.id=`ball${i}`
      this.balls.className='ball';
      document.querySelector('.container').appendChild(this.balls);
    }
  }

  styleBalls() {
    document.getElementById('ball0').style.backgroundColor = '#ff005d'
    document.getElementById('ball1').style.backgroundColor = '#ff005d'
    document.getElementById('ball2').style.backgroundColor = '#ff005d'
    document.getElementById('ball3').style.backgroundColor = '#ff005d'
    document.getElementById('ball4').style.backgroundColor = '#ff005d'
  }
  render() {
    newBalls.createBalls();
    newBalls.styleBalls();
  }
}

const newBalls = new Balls();
newBalls.render();
