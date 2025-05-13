window.addEventListener("load", function () {
  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // ctx.fillStyle = 'rgb(148, 41, 139)';
  ctx.strokeStyle = "rgb(46, 46, 44)";
  ctx.lineWidth = 2;
  ctx.shadowColor = "rgba(22, 22, 22, 0.7)";
  ctx.shadowOffsetX = 7;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 5;
  // ctx.globalCompositeOperation = 'destination-over';
  let radius = canvas.width > 900 ? 30 : 15;
  console.log(radius);
  // const radius = 30;

  let drawing = false;
  let angle = 0;

  function drawShape(x, y, radius, inset, n) {
    console.log(radius);
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < n; i++) {
      ctx.rotate(Math.PI / n);
      ctx.lineTo(0, 0 - radius * inset);
      ctx.rotate(Math.PI / n);
      ctx.lineTo(0, 0 - radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  drawShape(50, 50, radius, 1, 3);

  drawShape((radius / 2)+70, (radius / 2) +50, radius / 2, 0.5, 3);

  drawShape(radius+ 50, radius+ 70, radius * 0.5, 0.5, 5);

  window.addEventListener("mousemove", function (e) {
    console.log(radius);
    if (drawing) {
      ctx.save();
      ctx.translate(e.x, e.y);

      ctx.rotate(angle);
      ctx.fillStyle = "rgb(255, 254, 255)";
      ctx.strokeStyle = "rgb(0, 0, 0)";
      drawShape(0, 0, radius, 1, 3);
      // hue += 3;
      // drawShape(50, 50, radius, inset, n);//rotate around center point
      ctx.rotate(-angle * 3);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.strokeStyle = "rgb(255, 255, 255)";
      drawShape((radius / 2) + 20, radius / 2, radius / 2, 0.5, 3);

      ctx.rotate(-angle/2);
      ctx.fillStyle = "rgb(243, 11, 11)";
      ctx.strokeStyle = "rgb(255, 255, 255)";
      drawShape(radius, radius + 20, radius * 0.5, 0.5, 5);

      angle += 0.1;
      ctx.restore();
    }
  });
  window.addEventListener("mousedown", function (e) {
    drawing = true;
  });
  window.addEventListener("mouseup", function (e) {
    drawing = false;
  });
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    radius = canvas.width > 900 ?  30 : 15;
    drawShape(50, 50, radius, 1, 3);

  drawShape((radius / 2)+70, (radius / 2) +50, radius / 2, 0.5, 3);

  drawShape(radius+ 50, radius+ 70, radius * 0.5, 0.5, 5);
  });
});
