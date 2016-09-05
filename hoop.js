class Hoop {
  constructor() {
  }
  createBackboard() {
    const container = document.getElementById('container');
    const hoop = document.createElement('div');
    hoop.setAttribute('id', 'hoop');
    container.appendChild(hoop);
    const rim = document.createElement('div');
    rim.setAttribute('id', 'rim');
    hoop.appendChild(rim);
  }
}

const b = new Hoop;
b.createBackboard();
