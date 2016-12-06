class Hoop {
  constructor() {
    this.hoop = null;
    this.rim = null;
  }
  createBackboard() {
    const container = document.getElementById('container');
    this.hoop = document.createElement('div');
    this.hoop.setAttribute('id', 'hoop');
    container.appendChild(this.hoop);
    this.rim = document.createElement('div');
    this.rim.setAttribute('id', 'rim');
    this.hoop.appendChild(this.rim);
  }
  render() {
    b.createBackboard();
  }
}

const b = new Hoop();
b.render();
