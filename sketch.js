let sistema = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0, 50);

  let p1 = new Particula();
  sistema.push(p1);
  let p2 = new Particula();
  sistema.push(p2);
  let p3 = new Particula();
  sistema.push(p3);

  for (let i = 0; i < sistema.length; i++) {
    if (sistema[i].estaMuerta) {
      sistema.splice(i, 1);
    }
  }

  for (let i = 0; i < sistema.length; i++) {
    sistema[i].actualizar();
    sistema[i].mostrar();
  }

  print(sistema.length);
}
