class Hoop {
  constructor() {
    this.hoop = null;
    this.rim = null;
  }
  createHoop() {
    const container = document.querySelector('.container');
    this.hoop = document.createElement('div');
    this.hoop.setAttribute('id', 'hoop');
    container.appendChild(this.hoop);
    this.rim = document.createElement('div');
    this.rim.setAttribute('id', 'rim');
    this.hoop.appendChild(this.rim);
  }
  render() {
    newHoop.createHoop();
  }

}

const newHoop = new Hoop;
newHoop.render();
