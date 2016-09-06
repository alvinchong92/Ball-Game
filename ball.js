class Ball {
  constructor() {
  }

  createBall() {
    const container = document.getElementById('container');

    const ball1 = document.createElement('div');
    ball1.classList.add('ball');
    ball1.setAttribute('id', 'ball1');
    container.appendChild(ball1);
    document.getElementById('ball1').style.left = `${Math.floor(Math.random() * 900)}px`;
    document.getElementById('ball1').style.top = `${Math.floor(Math.random() * 300)}px`;

    const ball2 = document.createElement('div');
    ball2.classList.add('ball');
    ball2.setAttribute('id', 'ball2');
    container.appendChild(ball2);
    document.getElementById('ball2').style.left = `${Math.floor(Math.random() * 900)}px`;
    document.getElementById('ball2').style.top = `${Math.floor(Math.random() * 300)}px`;

    const ball3 = document.createElement('div');
    ball3.classList.add('ball');
    ball3.setAttribute('id', 'ball3');
    container.appendChild(ball3);
    document.getElementById('ball3').style.left = `${Math.floor(Math.random() * 900)}px`;
    document.getElementById('ball3').style.top = `${Math.floor(Math.random() * 300)}px`;

    const ball4 = document.createElement('div');
    ball4.classList.add('ball');
    ball4.setAttribute('id', 'ball4');
    container.appendChild(ball4);
    document.getElementById('ball4').style.left = `${Math.floor(Math.random() * 900)}px`;
    document.getElementById('ball4').style.top = `${Math.floor(Math.random() * 300)}px`;

    const ball5 = document.createElement('div');
    ball5.classList.add('ball');
    ball5.setAttribute('id', 'ball5');
    container.appendChild(ball5);
    document.getElementById('ball5').style.left = `${Math.floor(Math.random() * 900)}px`;
    document.getElementById('ball5').style.top = `${Math.floor(Math.random() * 300)}px`;
  }
}
