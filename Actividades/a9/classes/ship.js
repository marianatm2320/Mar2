function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scale, this.scale);
  
  context.beginPath();
context.moveTo(-120, 30);
context.lineTo(-120, -30);
context.lineTo(-40, -5);
context.closePath();
context.fillStyle = '#272727ff';
context.fill();


// cuerpo principal (cilíndrico)
context.beginPath();
context.ellipse(0, 0, 100, 30, 0, 0, Math.PI * 2);
const bodyGrad = context.createLinearGradient(-80, 0, 80, 0);
bodyGrad.addColorStop(0, '#4b5563');
bodyGrad.addColorStop(0.5, '#9aa6b2');
bodyGrad.addColorStop(1, '#394149');
context.fillStyle = bodyGrad;
context.fill();



// cabina (cockpit)
context.beginPath();
context.ellipse(48, 0, 28, 8, 0, 0, Math.PI * 2);
const windGrad = context.createLinearGradient(-80, 0, 80, 0);
windGrad.addColorStop(0, '#1e4172ff');
windGrad.addColorStop(0.5, '#83add8ff');
windGrad.addColorStop(1, '#1e4172ff');
context.fillStyle = windGrad;
context.fill();


context.beginPath();
context.ellipse(-48, 0, 18, 8, 0, 0, Math.PI * 2);
const wind2Grad = context.createLinearGradient(-80, 0, 80, 0);
wind2Grad.addColorStop(0, '#1e4172ff');
wind2Grad.addColorStop(0.5, '#83add8ff');
wind2Grad.addColorStop(1, '#1e4172ff');
context.fillStyle = wind2Grad;
context.fill();


// alas / aletas
context.beginPath();
context.moveTo(-30, 20);
context.lineTo(-100, 40);
context.lineTo(-20, 40);
context.closePath();
context.fillStyle = '#5a616a';
context.fill();



context.beginPath();
context.moveTo(20, 10);
context.lineTo(100, 40);
context.lineTo(20, 40);
context.closePath();
context.fillStyle = '#5a616a';
context.fill();



// aleta trasera
context.beginPath();
context.moveTo(-70, -30);
context.lineTo(-60, -30);
context.lineTo(-40, -10);
context.closePath();
context.fillStyle = '#32383f';
context.fill();


// pequeña antena
context.beginPath();
context.moveTo(0, -30);
context.lineTo(0, -50);
context.strokeStyle = '#cbd5e1';
context.lineWidth = 2;
context.stroke();
context.beginPath();
context.arc(0, -54, 3, 0, Math.PI * 2);
context.fillStyle = '#cbd5e1';
context.fill();


  if (this.showFlame) {
// brillo de escape (un simple degradado radial)
const glow = context.createRadialGradient(-120, 50, 10, -120, 50, 70);
glow.addColorStop(0, 'rgba(255,160,0,0.9)');
glow.addColorStop(0.5, 'rgba(255,80,0,0.5)');
glow.addColorStop(1, 'rgba(255,80,0,0)');
context.beginPath();
context.moveTo(-120, 18);
context.bezierCurveTo(-120, 40, -140, 60, -120, 80);
context.lineTo(-120, 80);
context.bezierCurveTo(-100, 60, -80, 40, -120, 18);
context.closePath();
context.fillStyle = glow;
context.fill();
  }
  context.restore();
};
