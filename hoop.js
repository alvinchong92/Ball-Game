console.log("backboard")
class backboard {
constructor () {

  }

  createBackboard() {
    const container = document.getElementById('container');
    let hoop = document.createElement('div');
    hoop.setAttribute('id','hoop')
    container.appendChild(hoop);
    let rim = document.createElement('div');
    rim.setAttribute('id','rim');
    hoop.appendChild(rim);
  }





  hoopdegree () {


  }




}

const b = new backboard;
b.createBackboard();
