class Game {
  constructor() {
    this.count =0;
    this.el = null;
  }

  score() {
    this.el = document.createElement('p');
    this.el.setAttribute('id','score');
    container.appendChild(this.el);
    this.el.style.display = 'block';
    this.el.innerHTML = 'Hit?'
  }

  clickToMove() {
    $('.ball').click(function() {
      $(this).animate({ 'left': '-200'}, 'linear', function() {
        $(this).hide(100);
        });
      });
  }

  render() {
    c.score();
    c.clickToMove();
  }
}

const c = new Game();
c.render();
