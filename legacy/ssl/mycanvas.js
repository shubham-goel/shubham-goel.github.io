var c = document.getElementById("meraCanvas");
var ctx = c.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);

// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

// // Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// Create gradient
// var grd = ctx.createRadialGradient(75,50,5,90,60,100);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);
var size_x = 800;
var size_y = 480;
var theta = 0;
var e = 0.58;
ctx.translate(450,250);

drawEllipse(ctx,-size_x/2.0,-size_y/2.0,size_x,size_y);
ctx.clip();

drawEllipseByCenter(ctx, 0, 0, size_x, size_y,"black");
drawEllipseByCenter(ctx, 0,0,size_x-50,size_y-50,"yellow");
drawEllipseByCenter(ctx, 0,0,size_x-100,size_y-100,"black");

drawEllipseByCenter(ctx, -70,150,220*(e+0.04),220,"yellow");
drawEllipseByCenter(ctx, 70,150,220*(e+0.04),220,"yellow");
drawEllipseByCenter(ctx, 0,170,50,50,"yellow");

var rad=65;
drawEllipseByCenter(ctx, -105,-110,2*rad,2*rad,"yellow");
drawEllipseByCenter(ctx, 105,-110,2*rad,2*rad,"yellow");


ctx.beginPath();
ctx.moveTo(-105+rad+0.5,-110 + (-90));
ctx.lineTo(-105+rad+0.5, -110);
ctx.lineTo(-105-rad +2.5,-110 - 20 );
ctx.lineTo(-105+rad+2 - 2*rad + 30,-110 + (-90) + 8);
ctx.closePath();
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(-(-105+rad+0.5),-110 + (-90));
ctx.lineTo(-(-105+rad+0.5), -110);
ctx.lineTo(-(-105-rad +2.5),-110 - 20 );
ctx.lineTo(-(-105+rad+2 - 2*rad + 30),-110 + (-90) + 8);
ctx.closePath();
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();
ctx.moveTo((-105+rad+1), -195);
ctx.arc(0,0,150,-0.54*Math.PI,-0.46*Math.PI);
ctx.lineTo(-(-105+rad+1), -195);
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.fillStyle="yellow";
ctx.fill();

//====================//

ctx.rotate((45-theta)*Math.PI/180);
theta = theta + 45;

drawEllipseByCenter(ctx, 0-30,200+10,200,200*e,"yellow");
drawEllipseByCenter(ctx, 200+10,-30,200*e,200,"yellow");

ctx.rotate((-theta)*Math.PI/180);
//============elliptic_strip==============//
ctx.beginPath();
ctx.moveTo(-size_x/2.0,0);
drawHalfEllipseByCenter(ctx,0,0,size_x,size_y,"true");
ctx.lineTo((size_x-50)/2,0);
drawHalfEllipseByCenter(ctx,0,0,size_x-50,size_y-50,"false");
ctx.closePath();
ctx.strokeStyle="#202020";
ctx.stroke();
ctx.fillStyle="#202020";
ctx.fill();
//=========END_elliptic_strip============//

///=================================CITE:================================//
// http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas ///
// http://diveintohtml5.info/canvas.html ///
// http://www.w3schools.com ////

function drawEllipseByCenter(ctx, cx, cy, w, h, color) {
  if(color=="black"){
  	ctx.strokeStyle = "#202020";
  	drawEllipse(ctx, cx - w/2.0, cy - h/2.0, w, h);
  	ctx.fillStyle = "#202020";
  }
  else if(color=="yellow"){
  	ctx.strokeStyle = "yellow";
  	drawEllipse(ctx, cx - w/2.0, cy - h/2.0, w, h);
  	ctx.fillStyle = "yellow";
  }
  ctx.fill();
}

function drawEllipse(ctx, x, y, w, h) {
  var kappa = .5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);//3 quardant
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);//4 quardant
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);//1 quadrant
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);//2 quadrant
  ctx.closePath(); // not used correctly, see comments (use to close off open path)
  ctx.stroke();
}

function drawHalfEllipseByCenter(ctx, cx, cy, w, h , bool) {
  	drawHalfEllipse(ctx, cx - w/2.0, cy - h/2.0, w, h, bool);
}

function drawHalfEllipse(ctx, x, y, w, h , bool) {
  var kappa = .5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle
  
  if(bool == "true"){
  	ctx.bezierCurveTo(x, -(ym - oy), xm - ox, -y, xm, -y);//3 quardant
  	ctx.bezierCurveTo(xm + ox, -y, xe, -(ym - oy), xe, -ym);//4 quardant
  }
  else{
  	ctx.bezierCurveTo(xe, -(ym - oy),xm + ox, -y, xm, -y);//4 quardant
  	ctx.bezierCurveTo(xm - ox, -y,x, -(ym - oy),  x, -ym);//3 quardant
  }
}
///===========CITE END=========================================================///
